import express from "express";
import { getList } from "../global/itemList.js";

const router = express.Router();
const list = getList();

router.get("/getlist", (req, res) => {
  console.log(list);

  res.status(200).json(list);
});

router.post("/addlist", (req, res) => {
  const { item } = req.body;

  if (list.includes(item)) {
    return res.json({ message: "item allready exist in the list" });
  }

  try {
    list.push(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }

  res.status(201).json({ message: "Item added successfully" });
});

export { router as itemRouter };
