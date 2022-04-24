const router = require("express").Router();

const entrepriseController = require("../controllers/entrepriseController");

router.get('/', entrepriseController.get_Entreprise);

router.post('/create', entrepriseController.create_Entreprise);

router.delete('/delete/:id', entrepriseController.delete_entreprise);

router.get('/:id', entrepriseController.get_Entreprise_byId);

module.exports = router;