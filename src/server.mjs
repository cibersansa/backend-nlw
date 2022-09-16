import express from "express";

const app = express()

// www.testeapp.com/ads 

app.get('/ads', (request, response) => {
    return response.send('acessou o ads')
})

app.listen(3333)