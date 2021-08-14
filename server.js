require('dotenv').config();

const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
  
// database connection
const connectDatabase = require('./config/dbsetup');
connectDatabase();

// routes
const viewRoute = require('./routes/view');
const alltransactions = require('./routes/alltransactions');
const transferRoute = require('./routes/transfer');

// home routes
app.get('/', (req, res) => {
    res.render('home');
});

// view route
app.use('/view', viewRoute);

// trasfer credit
app.use('/transfer', transferRoute);


// history route
app.use('/transactions', alltransactions);


// start server at PORT
app.listen( process.env.PORT || 3000, () => {
    console.log(`listening at ${process.env.PORT || 3000}`)
});

