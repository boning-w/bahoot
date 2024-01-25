import signup from "@/controllers/auth/signup";
import validate from "@/middlewares/validate";
import { FormSignUpSchema } from "@/models/auth.model";
import { Router } from "express";

const router = Router();

router.post("/signup", validate(FormSignUpSchema), signup);

export default router;
