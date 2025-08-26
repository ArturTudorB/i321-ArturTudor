const Facture = require('../models/facture');

// Transformation des données en objets Facture
let factures = [
    new Facture(1, "Clinique Saint-Paul", 1250.50, "2023-10-15", "en attente"),
    new Facture(2, "Centre Médical Dupont", 875.25, "2023-10-10", "payée")
];

exports.getAllFactures = (req, res) => {
    res.json(factures);
};

exports.getFactureById = (req, res) => {
    const id = parseInt(req.params.id);
    const facture = factures.find(f => f.id === id);

    if (!facture) {
        return res.status(404).json({ message: "Facture non trouvée" });
    }
    res.json(facture);
};

exports.createFacture = (req, res) => {
    const { clinique, montant, date, statut } = req.body;

    if (!clinique || !montant || !date) {
        return res.status(400).json({ message: "Clinique, montant et date sont obligatoires" });
    }

    const nouvelleFacture = new Facture(
        factures.length + 1,
        clinique,
        parseFloat(montant),
        date,
        statut
    );

    factures.push(nouvelleFacture);
    res.status(201).json(nouvelleFacture);
};

exports.updateFacture = (req, res) => {
    const id = parseInt(req.params.id);
    const index = factures.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Facture non trouvée" });
    }

    const { clinique, montant, date, statut } = req.body;

    // Création d'une nouvelle instance avec les données mises à jour
    factures[index] = new Facture(
        id,
        clinique || factures[index].clinique,
        montant ? parseFloat(montant) : factures[index].montant,
        date || factures[index].date,
        statut || factures[index].statut
    );

    res.json(factures[index]);
};

exports.deleteFacture = (req, res) => {
    const id = parseInt(req.params.id);
    const index = factures.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Facture non trouvée" });
    }

    const factureSupp = factures[index];
    factures = factures.filter(f => f.id !== id);

    res.json({ message: "Facture supprimée", facture: factureSupp });
};