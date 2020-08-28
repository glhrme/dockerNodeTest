import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.TS_NODE_DEV ? '.env.development' : '.env'
})

const app = express()

app.get('/', (req, res) => res.send('Oi'))

app.listen(process.env.PORT, () => console.log(process.env.PORT, process.env.TS_NODE_DEV))
