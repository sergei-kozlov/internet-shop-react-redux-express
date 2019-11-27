const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const phoneRouter = require('./routes/phones');
const categoriesRouter = require('./routes/categories');
const orderRouter = require('./routes/order');


const passwordMongoDB = require('./config/index');

const app = express();

//configure of handlebars
const hbs =exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
//end of configure of handlebars

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(session({
    secret: 'any secret value',
    resave: false,
    saveUninitialized: false
}));


app.use(express.urlencoded({extended: true}));
app.use('/api/phones', phoneRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/order', orderRouter);



//test handlebars
app.use('/confirm', (req, res) => {
    res.render('confirm_order');
});



async function start() {
    try {
        const url = `mongodb+srv://phone-store:${passwordMongoDB.password}@cluster0-5cvys.azure.mongodb.net/test?retryWrites=true&w=majority`;
        await mongoose.connect(url, {useNewUrlParser: true});
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (e) {
        console.log(e)
    }
}

start();