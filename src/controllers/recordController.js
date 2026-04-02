import Record from "../models/Record.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createRecord = asyncHandler(async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing" });
  }

  const { amount, type, category, date } = req.body;

  const record = await Record.create({
    user: req.user._id,
    amount,
    type,
    category,
    date
  });


  res.status(201).json(record);
});

export const getRecords = asyncHandler(async (req, res) => {
  const { page = 1, limit = 5, type, category } = req.query;

  let filter = { user: req.user._id };

  if (type) filter.type = type;
  if (category) filter.category = category;

  const total = await Record.countDocuments(filter);

  const records = await Record.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  res.json({
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
    data: records
  });
});

export const updateRecord = asyncHandler(async (req, res) => {

  const record = await Record.findById(req.params.id);

  if (!record) {
    return res.status(404).json({ message: "Not found" });
  }  

  

  Object.assign(record, req.body);
  await record.save();

  res.json(record);
});

export const deleteRecord = asyncHandler(async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
