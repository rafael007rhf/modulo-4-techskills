import express from 'express';
import { sum } from './sum';

const app = express();
app.use(express.json());
app.get('/ping', (_req, res) => {
  res.json({ status: 'ok' });
});
app.get('/saudacao/:nome', (req, res) => {
  res.json({ mensagem: `Olá, ${req.params.nome}` });
});
app.post('/soma', (req, res) => {
  const { a, b } = req.body ?? {};
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
    res.status(400).json({ erro: 'Os campos a e b devem ser números finitos' });
    return;
  }
  res.json({ resultado: sum(a, b) });
});
app.use((_req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});
export default app;
