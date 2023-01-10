const express = require('express')
const app = express()
const cors = require('cors');

const port = 3000

const {sharepointRouter} = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/sharepoint', sharepointRouter);
app.use('/', (req,res) => {
    res.json('Server is working.')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})