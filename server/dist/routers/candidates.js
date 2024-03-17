"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const candidate_1 = require("../controllars/candidate");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/add-candidate", candidate_1.addCandidate);
router.post("/get-based-on-assembly", candidate_1.getAllCandidateBasedOnAssembly);
exports.default = router;
