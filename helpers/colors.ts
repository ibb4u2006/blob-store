export const colorHexToRgb = (color: string) => {
  if (!color) return "";

  const components = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    color.toLowerCase()
  );

  if (!components) {
    return "";
  }

  const red = parseInt(components[1], 16);
  const green = parseInt(components[2], 16);
  const blue = parseInt(components[3], 16);

  return {
    red,
    green,
    blue,
  };
};

export const colorHexToRgba = (color: string, opacity: number) => {
  const rgb = colorHexToRgb(color);

  if (!rgb) {
    return "";
  }

  const { red, green, blue } = rgb;

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const colorRgbaToHex = (rgba: any) => {
  let sep = rgba.indexOf(",") > -1 ? "," : " ";
  rgba = rgba.substr(5).split(")")[0].split(sep);

  if (rgba.indexOf("/") > -1) rgba.splice(3, 1);

  let R: any;
  for (R in rgba) {
    let r = rgba[R];
    if (r.indexOf("%") > -1) {
      let p = r.substr(0, r.length - 1) / 100;

      if (R < 3) {
        rgba[R] = Math.round(p * 255);
      } else {
        rgba[R] = p;
      }
    }
  }
  let r = (+rgba[0]).toString(16),
    g = (+rgba[1]).toString(16),
    b = (+rgba[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};
