const  Entreprise = require("../models/entreprise");

const create_Entreprise = (req, res) => {
    console.log(req.body);
    try {
        const entreprise = new Entreprise(req.body);
        entreprise.save()
                  .then((result) => {
                      res.send({ message: "User created successfully" });
                  });
    } catch (error) {
        console.log(error);
    }
}

const get_Entreprise = (req, res) => {
    try {
        Entreprise.find()
                  .then((result) => {
                      res.send(result);
                  });
    } catch (error) {
        console.log(error);
    }
}

const delete_entreprise = (req, res) => {
    try {
        const id = req.params.id;
        Entreprise.findByIdAndDelete(id)
                  .then((result) => {
                      res.send(result);
                  })
    } catch (error) {
        console.log(error);
    }
}

const get_Entreprise_byId = (req, res) => {
    try {
        const id = req.params.id;
        Entreprise.findById(id)
                  .then((result) => {
                      res.send(result);
                  })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    create_Entreprise,
    get_Entreprise,
    delete_entreprise,
    get_Entreprise_byId
}
