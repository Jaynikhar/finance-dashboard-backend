import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Public routes

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Jay
 *             email: jay@gmail.com
 *             password: 123456
 *     responses:
 *       201:
 *         description: User registered
 */
router.post("/register", register);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: jay@gmail.com
 *             password: 123456
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login", login);

export default router;