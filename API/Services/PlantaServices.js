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


    //Metodo de Alteração de dados de plantas
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





    //Altera os Dados Indicados
    alteraPlanta: (id) => {
        return new Promise((aceito, rejeito) => {
            db.query(
                "UPDATE detalhes_plantas SET Nome = ? WHERE id = ?",
                [id, Nome],
                (error, result) => {
                    if (error) {
                        rejeito(error);
                        aceito(result);
                    };
                }
            );
        });
    },

    //Exclui dos Dados Indicados

    deletaPlanta: (id) => {
        return new Promise((aceito, rejeito) => {
            db.query("DELETE FROM detalhes_plantas WHERE id= ?", [id],
                (error, result) => {
                    if (error, results) {
                        rejeitado(error);
                        return;
                    }
                    aceito(result);
                });
        });
    }





};