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
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
exports.getPositiveposts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.positive_post.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.status(200).json(data);
    }
    catch (error) {
        console.error("Error fetching positive posts:", error);
        res.status(500).json({ error: 'Error fetching positive posts' });
    }
});
exports.createPositivepost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content, email } = req.body;
        // Get uploaded image file paths
        const imageFiles = req.files;
        const imagePaths = imageFiles ? imageFiles.map(file => file.path) : [];
        const data = yield prisma.positive_post.create({
            data: {
                content: content,
                image: imagePaths, // Store the file paths
                email: email,
                userId: req.body.userId || null,
            },
        });
        res.status(201).json(data);
    }
    catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: 'Error creating post' });
    }
});
exports.deletePositivePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const post = yield prisma.positive_post.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (!post)
            return res.status(404).json({ error: "Post not found" });
        const data = yield prisma.positive_post.delete({
            where: {
                id: Number(id),
            }
        });
        res.status(200).json("Delete Complete");
    }
    catch (error) {
    }
});
