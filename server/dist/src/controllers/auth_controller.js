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
exports.register = void 0;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcryptjs_1 = __importDefault(require("bcryptjs"));
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.user.findMany();
    res.json({
        user
    });
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, password } = req.body;
        //Validate
        if (!email) {
            return res.status(400).json({
                message: "Invalid Email."
            });
        }
        if (!password) {
            return res.status(400).json({
                message: "Invalid Password."
            });
        }
        // ✅ ตรวจสอบว่ามี email ซ้ำหรือไม่
        const existingUser = yield prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already in use!" });
        }
        //Hash Password
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashPassword = yield bcryptjs_1.default.hash(password, salt);
        //Register
        const newUser = yield prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hashPassword,
                // role: "ADMIN"
            },
            // select:{
            //     id:true,
            //     email:true 
            // }
        });
        res.json({
            message: "Send Complete", email, name
        });
    }
    catch (error) {
        console.log(error);
        res.json({ message: "Error" }).status(500);
    }
});
exports.register = register;
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email) {
            res.json({ message: "Not found Email!" }).status(400);
        }
        if (!password) {
            res.json({ message: "Not found Password!" }).status(400);
        }
        const user = yield prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials!!"
            });
        }
        //Compare Password
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.json({
                message: "Invalid Password"
            }).status(400);
        }
        const payload = {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            },
        };
        const token = jwt.sign(payload, '9notesecret', {
            expiresIn: '1d'
        });
        res.json({
            user: payload.user,
            token: token
        });
    }
    catch (error) {
    }
});
