import { API_GET_TEST } from "@/constants";
import { Request, Response, Router } from "express";

const router = Router();

/**
 * GET /api/test
 * @tags TEST
 * @summary Only for testing backend is running
 * @return 200 - success response - text/plain
 */
router.get(API_GET_TEST, (_req: Request, res: Response) => {
  res.send("Test!");
});

export default router;
