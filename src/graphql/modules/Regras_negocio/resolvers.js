const db = require("../../../db");

module.exports = {
    Query: {
        regrasnegocio(obj, args) {
            return db.regranegocios.find((regrasnegocio) => regrasnegocio.id === id);
        },
        regrasnegocios : () => db.regrasnegocios,
    },
    Mutation: {
        createRegrasnegocio: (_,{id, regra, range_inicial, range_final, tipo}) => {
            const regrasnegocio = {id, regra, range_inicial, range_final, tipo};
            db.regrasnegocios.push(regrasnegocio);
            return regrasnegocio;
        },
        updateRegrasnegocio: (_, {id, regra, range_inicial, range_final, tipo}) => {
            const regrasnegocio = db.regrasnegocios.find((regrasnegocio)=> regrasnegocio.id ===id);
            regrasnegocio.id = regranegocioproduto.id
            regrasnegocio.regra = regrasnegocio.regra 
            regrasnegocio.range_inicial =  regrasnegocio.range_inicial
            regrasnegocio.range_final = regrasnegocio.range_final
            regrasnegocio.tipo = regrasnegocio.tipo
           
            return regrasnegocio;
        },
        deleteRegrasnegocio: (_, {id}) => {
            const filteredRegrasnegocios = db.regrasnegocios.filter((regrasnegocio) => regrasnegocio.id !== id);
            regrasnegocios = filteredRegrasnegocios;
            return true;

        }
        }
    };