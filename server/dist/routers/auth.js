"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = require("../middleware/validator");
const validationSchema_1 = require("../utils/validationSchema");
const auth_1 = require("../controllars/auth");
const auth_2 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post("/create", (0, validator_1.validate)(validationSchema_1.CreateUserSchema), auth_1.create);
router.post("/sendVerificationToken", (0, validator_1.validate)(validationSchema_1.AdharOrMobileValidation), auth_1.sendVerificationToken);
router.post("/sign-in", (0, validator_1.validate)(validationSchema_1.TokenAndAdharOrMobileValidation), auth_1.signIn);
router.get("/getUser", auth_2.mustAuth, auth_1.getUserDetails);
router.post("/log-out", auth_2.mustAuth, auth_1.logOut);
exports.default = router;