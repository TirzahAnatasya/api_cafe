const express = require("express")
const mysql = require ("mysql")

const app = express()
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Ganti dengan username database Anda
    password: '', // Ganti dengan password database Anda
    database: 'cafe' // Ganti dengan nama database Anda
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Terhubung ke database MySQL');
});

app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM nama_tabel'; // Ganti dengan nama tabel Anda
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});