import express from "express";
import fs from "fs/promises";

const router = express.Router();

router.get("/sports", async (req, res) => {
  try {
    const data = await fs.readFile("./data/sports.json", "utf-8");

    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).send(`problems with reading the file: ${err}`);
  }
});

export default router;
