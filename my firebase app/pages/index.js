
import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Express backend for Timeless Appointment!');
});

// Example of another route
app.get('/api/status', (req, res) => {
  res.json({ status: 'running', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Timeless Appointment backend listening on port ${port}`);
});
