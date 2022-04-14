import { iOptions } from "./interface";
import fileDownload from "js-file-download";
import { filterData } from "../helpers/data";

export const fetchDataFromLocal = async () => {
  try {
    const response = await fetch("/api/options");
    if (response.ok) {
      const dataFromFile = await response.json();
      return dataFromFile;
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
    const response = await fetch(
      "https://frontendrecruitment.blob.core.windows.net/ibrahim/assets/options.json?sp=racw&st=2022-04-12T09:21:15Z&se=2022-04-20T17:21:15Z&spr=https&sv=2020-08-04&sr=c&sig=yH6hGOM4Hx1LMzAc1RBUYUg9z%2BabdDQPc2npOPHuO%2BY%3D",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-ms-blob-type": "BlockBlob",
        },
        body: JSON.stringify(filterData(data)),
      }
    );
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
