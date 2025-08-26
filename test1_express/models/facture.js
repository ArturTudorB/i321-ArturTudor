// models/facture.js
class Facture {
    constructor(id, clinique, montant, date, statut = "en attente") {
        this.id = id;
        this.clinique = clinique;
        this.montant = montant;
        this.date = date;
        this.statut = statut;
    }
}

module.exports = Facture;