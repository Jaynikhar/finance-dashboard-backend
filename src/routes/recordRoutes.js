import express from "express";
import { validateRecord } from "../middleware/validateRecord.js";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
  getSummary,
  getCategorySummary, 
  getMonthlyAnalytics

} from "../controllers/recordController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get all records
 *     responses:
 *       200:
 *         description: Success
 */

router.post("/", protect, authorize("admin"), validateRecord, createRecord);
router.get("/", protect, getRecords);
router.put("/:id", protect, authorize("admin"), validateRecord, updateRecord);
router.delete("/:id", protect, authorize("admin"), deleteRecord);
router.get("/summary", protect, authorize("analyst", "admin"), getSummary);
router.get("/category-summary", protect, authorize("analyst", "admin"), getCategorySummary );
router.get("/monthly", protect, authorize("analyst", "admin"), getMonthlyAnalytics );
export default router;