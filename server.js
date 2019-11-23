const express = require('express');
const mongoose = require('mongoose');
const phoneRouter = require('./routes/phones');
const categoriesRouter = require('./routes/categories');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({extended: true}));
app.use('/api/phones', phoneRouter);
app.use('/api/categories', categoriesRouter);


async function start() {
    try {
        const url = `mongodb+srv://phone-store:YP0RQw36WXxsuY8k@cluster0-5cvys.azure.mongodb.net/test?retryWrites=true&w=majority`;
        await mongoose.connect(url, {useNewUrlParser: true});
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (e) {
        console.log(e)
    }
}

start();