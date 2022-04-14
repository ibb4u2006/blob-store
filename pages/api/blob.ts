// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    fs.writeFileSync("./data/blob.json", JSON.stringify(req.body));
    return res.status(200).json(req.body);
  }
  const updatedBlob = fs.readFileSync("./data/blob.json");
  res.status(200).json(updatedBlob);
}
