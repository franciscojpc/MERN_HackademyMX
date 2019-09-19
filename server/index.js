const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
    
    console.log("TLC: req", req.params)
    res.send(`Hola Hackademy desde Express`, )

})


app.listen(port, err => {

    if (err) {

        return console.log('Ocurrio un error', err)

    }

    console.log(`http://localhost:${port}`)

})