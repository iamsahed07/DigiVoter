"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../@types/user");
const locations_1 = require("../utils/locations");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        enum: locations_1.locations,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    adhar: {
        type: String,
        required: true,
        unique: true,
    },
    tokens: [String],
    role: {
        type: String,
        enum: user_1.role,
        default: "User",
    },
    dob: {
        type: String,
        trim: true,
        required: true,
    },
    voterId: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userSchema);
