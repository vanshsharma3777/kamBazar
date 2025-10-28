import jwt from 'jsonwebtoken'
import { object } from 'zod'

const JWT_SECRET = process.env.JWT_SECRET  ||"secretKey"

export const signToken = ( payload: object)=>{
    return jwt.sign(payload , JWT_SECRET ,{
        expiresIn:"2d"
    })
}

export const verifyToken = (token:string)=>{
    try{
        return jwt.verify(token , JWT_SECRET)
    }
    catch(error:any){
        return (error.message)
    }
}