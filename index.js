const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const quotestt = './data/quotestt'; 

let files = fs.readdirSync(quotestt);

app.get('/quotes', (req, res) => {
    try {
        const randomFile = files[Math.floor(Math.random() * files.length)];
        const filePath = path.join(__dirname, quotestt, randomFile);
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Length': stat.size,
            'Content-Type': 'video/mp4',
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
            'Expires': '0'
        });

        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        res.status(500).send('Terjadi kesalahan');
    }
});

app.get('/asupan', (req, res) => {
    try {
    	const asupan = fs.readdirSync('./data/asupan');
        const randomFile = asupan[Math.floor(Math.random() * asupan.length)];
        const filePath = path.join(__dirname, './data/asupan', randomFile);
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Length': stat.size,
            'Content-Type': 'video/mp4',
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
            'Expires': '0'
        });

        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        res.status(500).send('Terjadi kesalahan');
    }
});

app.get('/qjawa', (req, res) => {
    try {
    	const qjawa = fs.readdirSync('./data/quotesjawa');
        const randomFile = qjawa[Math.floor(Math.random() * qjawa.length)];
        const filePath = path.join(__dirname, './data/quotesjawa', randomFile);
        const stat = fs.statSync(filePath);

        res.writeHead(200, {
            'Content-Length': stat.size,
            'Content-Type': 'video/mp4',
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
            'Expires': '0'
        });

        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        res.status(500).send('Terjadi kesalahan');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));