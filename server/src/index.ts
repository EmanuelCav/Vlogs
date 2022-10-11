import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
import './data/database'
import './data/mongoose'

app.set('port', process.env.PORT || 2200)

import vlogsRoute from './routes/vlogs.routes'
import userRoute from './routes/user.routes'

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(vlogsRoute)
app.use(userRoute)

app.use(express.static(path.join(__dirname, "../public")))

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})