const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./src/routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'))

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

mongoose.connect('mongodb+srv://SeemaOdedara:SYM_22orn03.NS@seemaodedara.euailed.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});