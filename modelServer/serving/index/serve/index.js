import express from "express";
const app= express();
import dotenv from "dotenv";
import { initializing } from "../../model/pre-m/mode/mode.js";
import { data } from "../../data/test-export-data.js";
import cors from "cors";
import { Server} from "socket.io";
import http from "http";

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:true,
    }
});

//set socket
app.set("io",io);


app.use(cors())
app.use(express.json());
dotenv.config();


app.get("/", ( req, res)=>{

    res.json({
        success: true,
        message:"hello from server 😒"
    })
});

app.get("/get-test-data", ( req, res)=>{

    return res.status(200).json({
        success:true,
        data: data
    })
})

app.post("/store-test", ( req, res)=>{

    console.log(req.body);
    
     
    data.text.push( req.body.text);

    if(req.body.classification==="positive"){
        data.label.push(1);
    }
    else{
        data.label.push(0);
    }

    req.app.get("io").emit("INPUT-TEST-DATA-FROM-CLIENT",{ data:"come from server", body:req.body});

    res.status(201).json({
        success:true,
        data:req.body
    })
})

const PORT = process.env.PORT || 8080;

server.listen( PORT, ()=>{
    initializing().then(()=>{
        console.log("server is working");
    })
    console.log(`model server is running on port ${PORT}`)
    console.log(process.env.PORT);
})
