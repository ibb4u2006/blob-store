import { colorHexToRgba } from "./colors";

export const filterData = (data: { [x: string]: any }) => {
  let filteredData: { [x: string]: any } = {};
  for (const key in data) {
    if (data[key] !== "" && data[key] !== false) {
      if (key === "primaryColor") {
        filteredData[key] = colorHexToRgba(data[key], 1);
      } else {
        filteredData[key] = data[key];
      }
    }
  }
  return filteredData;
};
