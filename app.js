import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.join());


app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');
});