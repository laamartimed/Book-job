const  Entreprise = require("../models/entreprise");

class EntrepriseService {
    constructor() {

    }

    create_Entreprise = (req, res) => {
        console.log(req.body);
        try {
            const entreprise = new Entreprise(req.body);
            
            entreprise.save()
                    .then((result) => {
                        res.send({ message: "User created successfully" });
                    })
                    .catch((err) => console.log('err : ' + err ));
        } catch (error) {
            console.log(error);
        }
    }

    update_entreprise = (req, res) => {
        const id = req.params.id;
        Entreprise.findById(id, (error, entreUpdated) => {
            entreUpdated.name = req.body.name;
            entreUpdated.secteur = req.body.secteur;
            entreUpdated.ville = req.body.ville;
            entreUpdated.tel = req.body.tel;
            entreUpdated.address = req.body.address;
            entreUpdated.website = req.body.website;
            entreUpdated.Latitude = req.body.Latitude;
            entreUpdated.Longitude = req.body.Longitude;
            entreUpdated.image = req.body.image;

            entreUpdated.save()
                        .then((result) => res.send({message: 'entreprise updted'}))
                        .catch((error) => console.log('erroe : ' + error));
        }).catch((error) => console.log('erroe : ' + error));
    }

    get_Entreprise = (req, res) => {
        try {
            Entreprise.find()
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => console.log('err : ' + err ));
        } catch (error) {
            console.log(error);
        }
    }

    delete_entreprise = (req, res) => {
        try {
            const id = req.params.id;
            Entreprise.findByIdAndDelete(id)
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => console.log('err : ' + err ))
        } catch (error) {
            console.log(error);
        }
    }

    get_Entreprise_byId = (req, res) => {
        try {
            const id = req.params.id;
            Entreprise.findById(id)
                    .then((result) => {
                        res.send(result);
                    })
                    .catch((err) => console.log('err : ' + err ))
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new EntrepriseService();