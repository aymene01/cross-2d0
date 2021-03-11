import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const server = () => {
    const app = express()

    
    const port = process.env.PORT || 4000
    app.listen(port, () => console.log(`server is running on port ${port}`))
}
server()