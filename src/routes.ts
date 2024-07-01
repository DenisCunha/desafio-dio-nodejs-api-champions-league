import { Router } from "express";
import { getPlayer } from "./controllers/players_controller";

const router = Router();

router.get("/players", getPlayer);


export default router;