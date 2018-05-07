const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Iitialize Express constructor
const app = express();

//Port
let port = process.env.PORT || 3000;

//Serving Static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up Handlebars Engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    const title = 'Home';
    res.render('home', {
        title: title
    });
});

app.get('/about', (req, res) => {
    const title = 'About';
    res.render('about', {
        title: title
    });
});



app.listen(port, () => console.log(`Listening on Port: ${port}`));