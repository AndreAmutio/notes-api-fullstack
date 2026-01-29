const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const noteRoutes = require('./routes/noteRoutes');
app.use('/notes', noteRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});