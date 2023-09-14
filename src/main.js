import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { router } from './routes/getStock.js'

const PORT = process.env.PORT || 1997
const corsOptions = {
  credentials: true,
}
export const app = express()

app.use(express.json())
app.use(cors(corsOptions))
app.use(router)

app.get('/', (req, res) => res.send('api de consulta dos ALs'))

app.listen(PORT, () => console.log('running ⚙️'))