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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, imageCover, authorId } = req.body;
    try {
        const data = yield prisma.post.create({
            data: {
                title,
                content,
                imageCover,
                published: true,
                author: { connect: { id: authorId } }
            }
        });
        //   const posts = await prisma.post.findMany({
        //     include: { author: true },
        //   });
        res.status(201).json(data);
    }
    catch (error) {
        res.status(400).json({ error: "Error creating post" });
    }
});
exports.getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.post.findMany({
            include: { author: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        role: true
                    }
                }
            }
        });
        res.status(201).json(data);
    }
    catch (error) {
        res.status(400).json({ error: "Error get post" });
    }
});
