import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
    const greeting: string = 'Hello World';
    res.send(greeting);
});

app.listen(3000, () => console.log('Server running, port: 3000'));