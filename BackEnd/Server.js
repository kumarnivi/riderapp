const express = require('express');
const cors = require('cors');
const connectDB = require('./Database/db');
const routes = require('./Routes/RiderRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//connect Database
connectDB();

//API Routes
app.use('/api', routes);

//error handiling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error:'Server Error'})
})

//start the server 
app.listen(port, () => {
    console.log(`Server listenning port ${port}`)
});