"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../@types/user");
const mongoose_1 = require("mongoose");
const candidateSchema = new mongoose_1.Schema({
    candidateName: {
        type: String,
        required: true,
    },
    party: {
        type: String,
        enum: user_1.party,
    },
    assembly: {
        type: String
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Candidate", candidateSchema);
