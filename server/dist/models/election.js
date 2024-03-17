"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../@types/user");
const mongoose_1 = require("mongoose");
const electionSchema = new mongoose_1.Schema({
    electionName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: user_1.status,
        required: true,
        default: "UPCOMING"
    },
    candidates: [
        {
            types: mongoose_1.Schema.Types.ObjectId,
            ref: "Candidate",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Election", electionSchema);
