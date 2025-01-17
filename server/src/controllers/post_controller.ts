const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createPost = async (req:any , res:any) => {
    const {title , content , imageCover, authorId } = req.body;
    try {
        const data = await prisma.post.create({
            data: {
              title,
              content,
              imageCover,
              published: true,
              author:{connect:{id:authorId}}
            }
          });

        //   const posts = await prisma.post.findMany({
        //     include: { author: true },
        //   });

        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ error: "Error creating post" });
    }
}

exports.getPost =   async (req:any,res:any)=> {
    try {
        const data = await prisma.post.findMany({
            include: {author: {
                select : {
                    id:true,
                    email:true,
                    name:true,
                    role:true
                }
            }
            }
        })
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ error: "Error get post" });
    }
}