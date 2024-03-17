"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCandidateBasedOnAssembly = exports.addCandidate = void 0;
const candidate_1 = __importDefault(require("../models/candidate"));
const addCandidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { candidateName, party, assembly } = req.body;
        const candidate = new candidate_1.default({ assembly, candidateName, party });
        yield candidate.save();
        res.status(200).json({ message: "Candidate added successfully", candidate, success: true });
    }
    catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
});
exports.addCandidate = addCandidate;
function getAllCandidateBasedOnAssembly(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { assembly } = req.body;
            const candidates = yield candidate_1.default.find({ assembly });
            res.status(200).json({ message: "Candidate successfully fetched", success: true, candidates });
        }
        catch (err) {
            res.status(500).json({ message: err.message, success: false });
        }
    });
}
exports.getAllCandidateBasedOnAssembly = getAllCandidateBasedOnAssembly;
