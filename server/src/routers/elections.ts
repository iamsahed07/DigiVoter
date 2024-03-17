import express from "express";
import { getAllElections,createElection } from "#/controllars/elections";
const router = express.Router();

router.get('/get-all', getAllElections)
router.post('/create', createElection)

export default router;