const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
import { Request, Response } from "express";

exports.createNotedot = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            return res.status(400).json({ error: "Title is requires!" })
        }
        const newNote = await prisma.note.create({
            data: {
                title: title,
                content: content,
            },
        });
        res.status(201).json(newNote);

    } catch (error) {
        console.error("Error in createNotedot:", error);
        res.status(500).json({ error: "Something Error" })
    }
}

exports.getAllNotedot = async (req: Request, res: Response) => {
    try {
        const getAllNote = await prisma.note.findMany({
            orderBy: {
                createdAt: 'desc'
            },
        });
        res.json(getAllNote);
    } catch (error) {
        console.error("Error : => ", error)
        res.status(500).json({ error: "Error to get all notes!" })
    }
}

// 3. READ a single Note by ID
exports.getNotedot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await prisma.note.findUnique({
            where: {
                id: String(id),
            }
        });
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        console.error("Error : ", error);
        res.status(404).json({ error: "Error" })
    }
}

// 4. UPDATE a Note by ID
exports.updateNotebyID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const noteUpdate = await prisma.note.update({
            where: {
                id: String(id)
            },
            data: {
                title: title,
                content: content
            }
        });
        res.json(noteUpdate)
    } catch (error) {
        res.status(404).json({ error })
    }
}

// 5. Delete a Note by ID
exports.deleteNotedot = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteData = await prisma.note.delete({
            where: { id: String(id) }
        })
        res.status(204).send(); // No Content
    } catch (error: any) {
        console.error("Failed to delete note:", error);
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Note not found to delete' });
        }
        res.status(500).json({ error: 'Failed to delete note', details: error.message });
    }
}