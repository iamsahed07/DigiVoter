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
exports.sendPassResetSuccessEmail = exports.sendForgetPasswordLink = exports.sendVerificationMail = void 0;
const template_1 = require("../mail/template");
const path_1 = __importDefault(require("path"));
const variables_1 = require("./variables");
const nodemailer_1 = __importDefault(require("nodemailer"));
const generateMailTransporter = () => {
    var transport = nodemailer_1.default.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: variables_1.MAILTRAP_USER,
            pass: variables_1.MAILTRAP_PASS,
        },
    });
    return transport;
};
const sendVerificationMail = (token, profile) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, userId } = profile;
    const welcomeMessage = `Hi ${name}, welcome to Voting Platform! There are so much thing that we do for verified users. Use the given OTP to verify your email.`;
    const transport = generateMailTransporter();
    transport.sendMail({
        to: email,
        from: variables_1.VERIFICATION_EMAIL,
        subject: "Welcome message",
        html: (0, template_1.generateTemplate)({
            title: "Welcome to Voting Platform",
            message: welcomeMessage,
            logo: "cid:logo",
            banner: "cid:welcome",
            link: "#",
            btnTitle: token,
        }),
        attachments: [
            {
                filename: "logo.png",
                path: path_1.default.join(__dirname, "../mail/logo.png"),
                cid: "logo",
            },
            {
                filename: "welcome.png",
                path: path_1.default.join(__dirname, "../mail/welcome.png"),
                cid: "welcome",
            },
        ],
    });
});
exports.sendVerificationMail = sendVerificationMail;
const sendForgetPasswordLink = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, link } = options;
    const message = "We just received a request that you forget your password. No problem you can use the link below and create brand new password.";
    const transport = generateMailTransporter();
    transport.sendMail({
        to: email,
        from: variables_1.VERIFICATION_EMAIL,
        subject: "Reset Password Link",
        html: (0, template_1.generateTemplate)({
            title: "Forget Password",
            message,
            logo: "cid:logo",
            banner: "cid:forget_password",
            link,
            btnTitle: "Reset Password",
        }),
        attachments: [
            {
                filename: "logo.png",
                path: path_1.default.join(__dirname, "../mail/logo.png"),
                cid: "logo",
            },
            {
                filename: "forget_password.png",
                path: path_1.default.join(__dirname, "../mail/forget_password.png"),
                cid: "forget_password",
            },
        ],
    });
});
exports.sendForgetPasswordLink = sendForgetPasswordLink;
const sendPassResetSuccessEmail = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const message = `Dear ${name} we just updated your new password. You can now sign in with your new password`;
    const transport = generateMailTransporter();
    transport.sendMail({
        to: email,
        from: variables_1.VERIFICATION_EMAIL,
        subject: "Reset Password Successfully",
        html: (0, template_1.generateTemplate)({
            title: "Reset Password Successfully",
            message,
            logo: "cid:logo",
            banner: "cid:forget_password",
            link: variables_1.SIGN_IN_URL,
            btnTitle: "Log in",
        }),
        attachments: [
            {
                filename: "logo.png",
                path: path_1.default.join(__dirname, "../mail/logo.png"),
                cid: "logo",
            },
            {
                filename: "forget_password.png",
                path: path_1.default.join(__dirname, "../mail/forget_password.png"),
                cid: "forget_password",
            },
        ],
    });
});
exports.sendPassResetSuccessEmail = sendPassResetSuccessEmail;
