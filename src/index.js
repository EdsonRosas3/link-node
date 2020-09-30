const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');

app.set('port',3000)

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

app.use(require('./routes/web'));

app.listen(app.get('port'),()=>{
    console.log(`corriendo en el puerto ${app.get('port')}`)
})