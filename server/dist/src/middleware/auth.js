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
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt = void 0;
// ใน middleware/auth.ts หรือ src/middleware/auth.ts
exports.jwt = require('jsonwebtoken');
exports.auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //code
        const token = req.header("x-auth-token");
        if (!token) {
            return res.status(401).json({
                message: 'No Token, Authorization Denied!'
            });
        }
        const verifyToken = exports.jwt.verify(token, "9notesecret", (err, decode) => {
            if (err) {
                return res.status(401).json({ message: "token is not valid" });
            }
            else {
                req.user = decode;
                next();
            }
        });
    }
    catch (error) {
        console.log("Something long Middelware");
        res.status(500).json({ message: "server error" });
    }
});
