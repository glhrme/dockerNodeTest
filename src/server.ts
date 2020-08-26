import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Oi'))

app.listen(process.env.PORT, () => console.log(process.env.PORT))
