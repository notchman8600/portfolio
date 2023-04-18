import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import {createCanvas, loadImage} from "@napi-rs/canvas";

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const WIDTH = 1200 as const;
  const HEIGHT = 800 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);

  const ctx = canvas.getContext("2d");
  const backgroundImage = await loadImage(path.resolve("./public/profile.jpg"));
  ctx.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT);
  //
  // registerFont(path.resolve("./fonts/ipagp.ttf"), {
  //   family: "ipagp",
  // });
  //
  // ctx.font = "60px ipagp";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  // ctx.fillText("わしはOGP画像を生成したい！！！！！", 600, 300);

  const buffer = canvas.toBuffer("image/webp");

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};
export default createOgp;
