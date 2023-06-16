import express from 'express'
const app = express();
import routes from './routes/routes.js'
import connectToDB from './db.js';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

connectToDB();
app.use(express.json());

app.use(cors())
app.use('/', routes);
app.use('/shortUrl', routes);

app.listen(process.env.PORT, console.log('Connected to port'));