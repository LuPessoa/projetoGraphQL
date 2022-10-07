const db = require("../../../db");

module.exports = {
    Query: {
        consultacredito(obj, args) {
            return db.consultacreditos.find((consultacredito) => consultacredito.id === id);
        },
        consultacreditos : () => db.consultacreditos,
    },
    Mutation: {
        createConsultacredito: (_,{id, user_id, cpf, json_response, status}) => {
            const consultacredito = {id, user_id, cpf, json_response, status};
            db.consultacreditos.push(consultacredito);
            return consultacredito;
        },
        updateConsultacredito: (_, {id, user_id, cpf, json_response, status}) => {
            const consultacredito = db.consultacreditos.find((consultacredito) => consultacredito.id === id);
            consultacredito.id = consultacredito.id
            consultacredito.user_id = consultacredito.user_id
            consultacredito.cpf =  consultacredito.cpf
            consultacredito.json_response = consultacredito.json_response
            consultacredito.status = consultacredito.status
            return consultacredito;
        },
        deleteConsultacredito: (_, {id}) => {
            const filteredConsultacreditos = db.consultacreditos.filter((consultacredito) => consultacredito.id !== id);
            consultacreditos = filteredConsultacreditos;
            return true;

        }
        }
    };