const express = require('express');

const app = express();

// Routes
app.use('/', require('./routes/index'));
app.use('/books', require('./routes/books'));
app.use('/authors', require('./routes/authors'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Server started on port ${PORT} '));