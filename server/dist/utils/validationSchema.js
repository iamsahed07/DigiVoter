"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateValidation = exports.SignInValidationSchema = exports.AdharOrMobileValidation = exports.TokenAndAdharOrMobileValidation = exports.CreateUserSchema = void 0;
const yup = __importStar(require("yup"));
const locations_1 = require("./locations");
const user_1 = require("../@types/user");
exports.CreateUserSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is missing!!")
        .min(3, "Name is too short!!")
        .max(20, "Name is too long!"),
    email: yup.string().required("Email is missing!").email("Invalid email"),
    adhar: yup
        .string()
        .trim()
        .length(12, "Invalid adhar")
        .required("Adhar is missing!"),
    location: yup
        .string()
        .trim()
        .oneOf(locations_1.locations, "Invalid location!")
        .required("location is missing!"),
    dob: yup
        .date()
        .max(new Date(), "DOB must be in the past")
        .required("DOB is required"),
    voterId: yup
        .string()
        .trim()
        .length(10, "Invalid voterId")
        .required("voterId is missing!"),
    mobile: yup
        .string()
        .trim()
        .length(10, "Invalid mobile no.")
        .required("Mobile no is missing!"),
    address: yup.string().trim().required("address no is missing!"),
});
exports.TokenAndAdharOrMobileValidation = yup.object().shape({
    token: yup.string().trim().required("Invalid token!"),
    adhar: yup.lazy((value) => {
        if (!value || value.trim() === "") {
            return yup.string().trim();
        }
        return yup.string().trim().strip().required("Adhar is required");
    }),
    mobile: yup.lazy((value) => {
        if (!value || value.trim() === "") {
            return yup.string().trim();
        }
        return yup.string().trim().strip().required("Mobile is required");
    }),
});
exports.AdharOrMobileValidation = yup.object().shape({
    adhar: yup.lazy((value) => {
        if (!value || value.trim() === "") {
            return yup.string().trim();
        }
        return yup.string().trim().strip().required("Adhar is required");
    }),
    mobile: yup.lazy((value) => {
        if (!value || value.trim() === "") {
            return yup.string().trim();
        }
        return yup.string().trim().strip().required("Mobile is required");
    }),
});
exports.SignInValidationSchema = yup.object().shape({
    email: yup.string().required("Email is missing!").email("Invalid email id!"),
    password: yup.string().trim().required("Password is missing!"),
});
exports.CandidateValidation = yup.object().shape({
    location: yup
        .string()
        .trim()
        .oneOf(locations_1.locations, "Invalid location!")
        .required("location is missing!"),
    candidateName: yup.string().trim().required("candidateName is missing!"),
    party: yup
        .string()
        .trim()
        .oneOf(user_1.party, "Invalid party!")
        .required("party is missing!"),
});
