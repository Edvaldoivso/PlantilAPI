//Arquivo dos Cruds que consome o DB.js que é a conexao em si.
const db = require("../db");

module.exports = {
    //Busca de Toadas as Plantas

    buscarTodas: () => {
        return new Promise((aceito, rejeito) => {
            db.query("SELECT * FROM detalhes_plantas;", (error, result) => {
                if (error) {
                    rejeito(error);
                    return;
                }
                aceito(result)
            });
        });
    },


    //Busca Unitaria de uma planta
    buscarUnitaria: (id) => {
        return new Promise((aceito, rejeito) => {
            db.query("SELECT * FROM detalhes_plantas WHERE id= ?"),
                [id],
                (error, result) => {
                    if (error) {
                        rejeito(error);
                        return;
                    };
                    if (result.length > 0) {
                        aceito(result[0]);
                    } else {
                        aceito(false);
                    };
                };
        });
    },



    inserirPlanta: (
        id,
        Nome,
        Colheita,
        Plantil,
        PartesComestiveis,
        DistanciaCovas,
        ProfundidadeCovas,
        Regas,
        Luz,
        PragasDoencas) => {
        return new Promise((aceito, rejeito) => {
            db.query(
                "INSERT INTO detalhes_plantas (id,Nome,Colheita,Plantil,PartesComestiveis,DistanciaCovas,ProfundidadeCovas,Regas,Luz,PragasDoencas) VALUES (?,?,?,?,?,?,?,?,?,?)",
                [id,
                    Nome,
                    Colheita,
                    Plantil,
                    PartesComestiveis,
                    DistanciaCovas,
                    ProfundidadeCovas,
                    Regas,
                    Luz,
                    PragasDoencas],
                (error, result) => {
                    if (error) {
                        rejeito(error);
                        aceito(result.inserirPlanta);
                    }
                }
            );
        });
    },

};