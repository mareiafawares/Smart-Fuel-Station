const express=require('express')
const connectDB=require('./config/db')
const dotenv=require('dotenv')
const userRouters=require('./routers/userRouters')

dotenv.config()
connectDB()

const app =express();

app.use(express.json())
app.use('/api',userRouters)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))