import express from "express";
import { validateRecord } from "../middleware/validateRecord.js";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "../controllers/recordController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Records
 *   description: Financial Records APIs
 */

/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create record
 *     tags: [Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             amount: 5000
 *             type: income
 *             category: salary
 *             note: Monthly salary
 *     responses:
 *       201:
 *         description: Record created
 */
router.post("/", protect, authorize("admin"), validateRecord, createRecord);


/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get all records
 *     tags: [Records]
 *     responses:
 *       200:
 *         description: List of records
 */
router.get("/", protect, getRecords);


/**
 * @swagger
 * /api/records/{id}:
 *   put:
 *     summary: Update record
 *     tags: [Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             amount: 6000
 *     responses:
 *       200:
 *         description: Record updated
 */
router.put("/:id", protect, authorize("admin"), validateRecord, updateRecord);

/**
 * @swagger
 * /api/records/{id}:
 *   delete:
 *     summary: Delete record
 *     tags: [Records]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Record deleted
 */
router.delete("/:id", protect, authorize("admin"), deleteRecord);

export default router;