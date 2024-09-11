import { Router } from "express";
import authRoutes from "./auth";
import databaseRoutes from "./database";
const router = Router();

router.use("/", authRoutes);
router.use("/", databaseRoutes);

router.get("/check-route", (req, res) => {
  res.send("Route is working");
});

export default router;
