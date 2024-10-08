import express from 'express';
import cors from 'cors';
import records from './routes/record';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.join());
app.use('/record', records);

//record/12345


//Start the Express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});