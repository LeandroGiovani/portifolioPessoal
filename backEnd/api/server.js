import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/', (request, response) => {
    response.send('Nenhum end point disponível.');
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})