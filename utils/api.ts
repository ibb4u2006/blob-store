import { iOptions } from "./interface";
import fileDownload from "js-file-download";
import { filterData } from "../helpers/data";
import { colorRgbaToHex } from "../helpers/colors";
import { CREDENTIALS } from "./credentials";

const SAS_URI = `https://${CREDENTIALS.RESOURCE_URI}?${CREDENTIALS.SAS_TOKEN}`;

export const fetchDataFromLocal = async () => {
  try {
    const response = await fetch("/api/options");
    if (response.ok) {
      const dataFromFile = await response.json();
      return {
        ...dataFromFile,
        primaryColor: colorRgbaToHex(dataFromFile.primaryColor),
      };
    }
    throw new Error(`Error: ${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

export const postDataToLocal = async (data: iOptions) => {
  try {
    const response = await fetch("/api/options", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filterData(data)),
    });
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`Error: ${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

export const putDataToRemote = async (data: iOptions) => {
  try {
    const response = await fetch(SAS_URI, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-ms-blob-type": "BlockBlob",
      },
      body: JSON.stringify(filterData(data)),
    });
    if (response.ok) {
      return await response.text();
    }
    throw new Error(`Error: ${response.status}`);
  } catch (error) {
    console.log(error);
  }
};

export const downloadUpdatedData = async (fileName: string) => {
  const data = await fetchDataFromLocal();
  return fileDownload(JSON.stringify(data), fileName);
};
