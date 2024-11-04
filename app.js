"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res
        .status(200)
        .send('Your node project is successfully hosted on ec2.');
});
app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
//# sourceMappingURL=app.js.map