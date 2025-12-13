
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, '..')));


app.get('/api/status', (req, res) => {
  res.json({ mensaje: 'Beauty Salon funcionando correctamente' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
