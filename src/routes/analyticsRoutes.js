import express from "express";
import { validateRecord } from "../middleware/validateRecord.js";
import {
  getSummary,
  getCategorySummary,
  getMonthlyAnalytics,
} from "../controllers/analyticsController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Dashboard Analytics APIs
 */

/**
 * @swagger
 * /api/records/summary:
 *   get:
 *     summary: Get total income and expenses
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Summary data
 */
router.get("/summary", protect, authorize("analyst", "admin"), getSummary);

/**
 * @swagger
 * /api/records/category-summary:
 *   get:
 *     summary: Category-wise aggregation
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Category breakdown
 */
router.get("/category-summary", protect, authorize("analyst", "admin"), getCategorySummary );

/**
 * @swagger
 * /api/records/monthly:
 *   get:
 *     summary: Monthly analytics
 *     tags: [Analytics]
 *     responses:
 *       200:
 *         description: Monthly data
 */
router.get("/monthly", protect, authorize("analyst", "admin"), getMonthlyAnalytics );

export default router;