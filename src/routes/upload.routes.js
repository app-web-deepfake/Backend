import { Router } from "express";
import { getPresignedUrl } from "../controllers/upload.controller.js";

const router = Router();

router.post("/presigned", getPresignedUrl);

export default router;
