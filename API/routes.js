const express = require("express");
const router = express.Router();

const PlantaControllers = require('./Controllers/PlantaControler');

//Get Padrão
router.get('/Plantas',PlantaControllers.buscarTodas);
//Get por ID
router.get('/BuscaPlanta/:id', PlantaControllers.buscarUnitaria);
//Post Inserir
router.post('/InserirPlanta',);
//Alterar Planta
router.put('/Alterar/:id',);
//Deletar Planta
router.delete('/DeletarPlanta/:id',);

module.exports = router