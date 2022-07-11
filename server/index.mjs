import express from 'express'
import cors from 'cors'
import router from './src/routes/index.js'
import dotenv from "dotenv";
dotenv.config()
const app = express()

const port = 5000
app.use(express.json())
app.use(cors())

app.use('/api/v1/', router)
app.use('/uploads', express.static('uploads'))

app.listen(port, (() => console.log(`Listening on port ${port}`)))