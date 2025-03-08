import { Request , Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createPositivepost = async (req:Request , res:Response) => {
    const { content , image , email , date } = req.body;
    try {
        const data = await prisma.positive_post.create(
            {
                data: {
                    content:content,
                    image:image,
                    email:email,
                    date: new Date(date),
                },
            }
        );
        res.status(201).json(data);   
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
}