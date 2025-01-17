const jwt = require('jsonwebtoken')

exports.auth = async (req:any ,res:any,next:any) => {
    try {
        //code
        const token = req.header("x-auth-token")

        if (!token) {
            return res.status(401).json({
                message:'No Token, Authorization Denied!'
            })
        }
        const verifyToken = jwt.verify(token,"9notesecret",(err:any,decode:any)=>{
            if (err) {
               return res.status(401).json({message: "token is not valid"}) 
            }else{
                req.user = decode;
                next()
            }
        })
    } catch (error) {
        console.log("Something long Middelware")
        res.status(500).json({message: "server error"})
    }
}