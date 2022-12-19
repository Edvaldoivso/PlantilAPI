//Gerencia e execulta as regras de negocio

const res = require("express/lib/response");
const plantasaservices = require("../Services/PlantaServices");

module.exports = {
    //Busca todas as plantas listadas no Banco de Dados

    buscarTodas: async (req, res) => {
        let json = {
            error: "",
            result: [],
        };

        let Plantas = await plantasaservices.buscarTodas();

        for (let i in Plantas) {
            json.result.push({
                id: Plantas[i].id,
                Nome: Plantas[i].nome_planta,
                Colheita: Plantas[i].epoca_coheita,
                Plantil: Plantas[i].epoca_plantil,
                PartesComestiveis: Plantas[i].partes_comestiveis,
                DistanciaCovas: Plantas[i].distancia_covas,
                ProfundidadeCovas: Plantas[i].profundidade_covas,
                Regas: Plantas[i].quantidade_rega,
                Luz: Plantas[i].quantidade_luz,
                PragasDoencas: Plantas[i].doenças_pragas
            })
        }
        res.json(json);
    },

    buscarUnitaria: async (req, res) => {
        let json = {
            error: "",
            result: {},
        };

        let id = req.res.params.id;
        let PlantaUnitaria = await plantasaservices.buscarUnitaria(id);

        if (PlantaUnitaria) {
            json.result = PlantaUnitaria;
        }

        res.json(json);
    },


    inserirPlanta: async (req, res) => {
        let json = {
            error: "",
            result: {},
        };

        
    }
}