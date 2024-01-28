import { API_GET_TEST } from "@/constants";
import { Request, Response, Router } from "express";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Only for testing backend is running
 * /test:
 *   get:
 *     summary: Test if backend is running
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: Successful response with plain text content "Test!"
 *         content:
 *           text/plain:
 *             example: Test!
 */
router.get(API_GET_TEST, (_req: Request, res: Response) => {
  res.send("Test!");
});

export default router;
