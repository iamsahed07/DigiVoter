import { addCandidate, getAllCandidateBasedOnAssembly } from "#/controllars/candidate";
import { mustAuth } from "#/middleware/auth";
import { Router } from "express";

const router = Router();
router.post("/add-candidate", addCandidate);
router.post("/get-based-on-assembly", getAllCandidateBasedOnAssembly)
export default router;