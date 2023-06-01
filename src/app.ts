import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// const port = 3000

app.get('/', (req: Request, res: any) => {
  res.send('working successfully!!')
})

export default app
