const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
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
        
        //Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        //Register
        const newUser = await prisma.user.create({
            data:{
                email: email,
                name: name,
                password: hashPassword
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
        res.json({message:"Email is alreadly use. Pls Try again"}).status(500);
    }
}

exports.login = (req:any , res:any)=>{
    res.send('Login user');
};