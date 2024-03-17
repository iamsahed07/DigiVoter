"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
const dbConfig_1 = require("./db/dbConfig");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
(0, dbConfig_1.connect)();
const auth_1 = __importDefault(require("./routers/auth"));
const elections_1 = __importDefault(require("./routers/elections"));
const candidates_1 = __importDefault(require("./routers/candidates"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('src/public'));
app.use("/auth", auth_1.default);
app.use("/elections", elections_1.default);
app.use("/candidates", candidates_1.default);
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
