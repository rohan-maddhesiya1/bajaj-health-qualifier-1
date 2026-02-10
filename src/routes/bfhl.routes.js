import express from "express";
import { handleBfhl } from "../controllers/bfhl.controller.js";

const router = express.Router();

router.post("/", handleBfhl);

export default router;
