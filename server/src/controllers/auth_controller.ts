const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');
import bcrypt from "bcrypt";

exports.getUser = async (req:any , res:any) => {
    const user = await prisma.user.findMany()
        res.json({
           user
        })
};

exports.register = async (req:any , res:any)=>{
    try {
        const {email , name ,  password} = req.body;
        //Validate
        if (!email) {
            return res.status(400).json({
                message:"Invalid Email."
            })
        }
        if (!password) {
            return res.status(400).json({
                message:"Invalid Password."
            })
        }
        //Check email Already
        const user = prisma.user.findUnique({
            select: {
                email:true
            },
        },
        res.json({message:"email already use"}))

        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        //Register
        const newUser = await prisma.user.create({
            data:{
                email: email,
                name: name,
                password: hashPassword,
                // role: "ADMIN"
            },
            // select:{
            //     id:true,
            //     email:true 
            // }
        }) 
        res.json({
            message:"Send Complete" , email , name
        });
    } catch (error) {
        console.log(error);
        res.json({message:"Error"}).status(500);
    }
}

exports.login = async (req:any , res:any)=>{
    try {
        const { email , password } = req.body;
        if (!email) {
            res.json({message: "Not found Email!"}).status(400);
        }  
        if (!password) {
            res.json({message: "Not found Password!"}).status(400);
        }

        const user = await prisma.user.findUnique({
            where:{
                email: email
            }
        })
        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials!!"
            })
        }

        //Compare Password
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            res.json({
                message: "Invalid Password"
            }).status(400)
        }

        const payload = {
            user:{
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role
            },
        }

        const token = jwt.sign(payload,'9notesecret',{
            expiresIn:'1d'
        })

        res.json({
            user:payload.user,
            token:token
        })
    } catch (error) {
        
    }  
};