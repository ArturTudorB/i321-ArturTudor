// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const facturesRoutes = require('./routes/factures');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Page d'accueil
app.get('/', (req, res) => {
    res.send(`
        <h1>Système de Gestion de Factures</h1>
        <ul>
            <li><a href="/api/factures">Voir toutes les factures</a></li>
            <li><a href="/api/bonjour">Bonjour</a></li>
            <li><a href="/api/salut">Salut</a></li>
        </ul>
    `);
});

// Routes existantes
app.get('/api/bonjour', (req, res) => {
    res.send(`
        <h1>Bonjour !</h1>
        <a href="/">Retour à l'accueil</a>
    `);
});

app.get('/api/salut', (req, res) => {
    res.send(`
        <h1>Salut !</h1>
        <a href="/">Retour à l'accueil</a>
    `);
});

// Nouvelles routes pour les factures
app.use('/api/factures', facturesRoutes);

module.exports = app;