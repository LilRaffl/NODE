import {Server} from 'http'
import express, {Request,Response} from 'express'

const server = express()
server.get('/',(req:Request,res:Response) =>{

res.send("alguma coisa na vida ")

})



server.listen(3000)