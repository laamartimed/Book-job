const router = require("express").Router();

const entrepriseService = require("../services/entrepriseService");

router.get('/', entrepriseService.get_Entreprise);

router.post('/create', entrepriseService.create_Entreprise);

router.delete('/delete/:id', entrepriseService.delete_entreprise);

router.get('/:id', entrepriseService.get_Entreprise_byId);

router.put('/update/:id', entrepriseService.update_entreprise);

module.exports = router;