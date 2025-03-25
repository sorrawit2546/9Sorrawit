import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getPositiveposts = async (req: Request, res: Response) => {
    try {
        const data = await prisma.positive_post.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching positive posts:", error);
        res.status(500).json({ error: 'Error fetching positive posts' });
    }
}

exports.createPositivepost = async (req: Request, res: Response) => {
    try {
        const { content, email } = req.body;

        // Get uploaded image file paths
        const imageFiles = req.files as Express.Multer.File[];
        const imagePaths = imageFiles ? imageFiles.map(file => file.path) : [];

        const data = await prisma.positive_post.create({
            data: {
                content: content,
                image: imagePaths, // Store the file paths
                email: email,
                userId: req.body.userId || null,
            },
        });
        res.status(201).json(data);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: 'Error creating post' });
    }
}

exports.deletePositivePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await prisma.positive_post.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (!post) return res.status(404).json({ error: "Post not found" });
        const data = await prisma.positive_post.delete({
            where: {
                id: Number(id),
            }
        })
        res.status(200).json("Delete Complete");
    } catch (error) {

    }
}