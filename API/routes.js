const express = require("express");
const router = express.Router();

const PlantaControllers = require('./Controllers/PlantaControler');

//Get Padrão
router.get('/Plantas', PlantaControllers.buscarTodas);
//Get por ID
router.get('/BuscaPlanta/:id', PlantaControllers.buscarUnitaria);
//Post Inserir
router.post('/InserirPlanta', PlantaControllers.inserirPlanta);
//Alterar Planta
router.put('/Alterar/:id', PlantaControllers.alteraPlanta);
//Deletar Planta
router.delete('/DeletarPlanta/:id', PlantaControllers.deletaPlanta);

module.exports = router