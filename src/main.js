import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const PORT = process.env.PORT || 1997
export const app = express()

app.use(express.json())
app.use(cors({
  credentials: true,
}))

app.get('/', (req, res) => res.send('api de consulta dos ALs'))
app.listen(PORT, () => console.log('running ⚙️'))