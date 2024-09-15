import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./routes/auth_routes.js"
import connectMongoDB from "./db/connectMongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000


console.log(process.env.MONGO_URL)

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
    connectMongoDB();
})