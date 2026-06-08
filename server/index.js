import express from "express";
import cors from "cors";

const app=express();

app.use(express.json());
app.use(cors(
    {
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        "http://82.29.160.45:5174",
        "http://82.29.160.45:5173"
    ],
    credentials: true,
  }
));

app.get("/api/message",(req,res)=>{
    res.json({message: "hello from chaicode server"})
});

const PORT=4004;
app.listen(PORT, "0.0.0.0", ()=>{
    console.log(`server is running on port ${PORT}`);
});


