const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let noteContent = ''; // In-memory store

app.get('/note', (req, res) => {
  res.json({ content: noteContent });
});

app.post('/note', (req, res) => {
  noteContent = req.body.content || '';
  res.json({ status: 'saved' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
