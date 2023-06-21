const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let cityFrom = false;
app.post('/', function (req, res) {
    // console.log(req.body)
    let obj =
    {
        "response": {
        "text": "",
            "tts": "Здравствуйте! Укажите откуда вы хотите отправится.",
            "end_session": false
    },

        "session_state": {
        "value": 10
    },
        "version": "1.0"
    }
    console.log(req.body.session.new)
    if (req.body.session.new === true) {
        obj.response.text = "Здравствуйте! Укажите откуда вы хотите отправится."
    }
    if (cityFrom !== false) {
        obj.response.text = `Ваш город отправления ${cityFrom}. Ваш город прибытия ${req.body.request.command}. Все правильно?`
    }
    if (req.body.session.new === false &&  cityFrom === false) {
        cityFrom = req.body.request.command;
        obj.response.text = "Укажите город прибытия"
    }
    console.log({cityFrom})
    res.json(obj)
})

app.listen(5000, console.log('Server Work'))