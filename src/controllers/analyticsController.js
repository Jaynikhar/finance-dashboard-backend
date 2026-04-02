import Record from "../models/Record.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const getSummary = asyncHandler(async (req, res) => {

  const userId = req.user._id;

  const data = await Record.aggregate([
    { $match: { user: userId } },

    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  let income = 0;
  let expense = 0;

  data.forEach(item => {
    if (item._id === "income") income = item.total;
    if (item._id === "expense") expense = item.total;
  });

  res.json({
    income,
    expense,
    balance: income - expense
  });
});

export const getCategorySummary = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const data = await Record.aggregate([
    { $match: { user: userId } },

    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    },

    { $sort: { total: -1 } }
  ]);

  res.json(data);
});

export const getMonthlyAnalytics = asyncHandler(async (req, res) => {
  const data = await Record.aggregate([
    { $match: { user: req.user._id } },
    {
      $group: {
        _id: { $month: "$createdAt" },
        income: {
          $sum: {
            $cond: [{ $eq: ["$type", "income"] }, "$amount", 0]
          }
        },
        expense: {
          $sum: {
            $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0]
          }
        }
      }
    },
    { $sort: { "_id": 1 } }
  ]);

  res.json(data);
});