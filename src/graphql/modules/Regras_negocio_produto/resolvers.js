const db = require("../../../db");

module.exports = {
    Query: {
        regrasnegocioproduto(obj, args) {
            return db.regrasnegocioprodutos.find((regrasnegocioproduto) => regrasnegocioprodutoo.id === id);
        },
        regrasnegocioprodutos : () => db.regrasnegocioprodutos,
    },
    Mutation: {
        createRegranegocioproduto: (_,{id, id_produto, id_regra_negocio, valor, data_inicio, data_fim}) => {
            const regrasnegocioproduto = {id, id_produto, id_regra_negocio, valor, data_inicio, data_fim};
            db.regrasnegocioprodutos.push(regrasnegocioproduto);
            return regrasnegocioproduto;
        },
        updateRegranegocioproduto: (_, {id, id_produto, id_regra_negocio, valor, data_inicio, data_fim}) => {
            const regrasnegocioproduto = db.regrasnegocioprodutos.find((regranegocioproduto)=> regranegocioproduto.id === id);
            regrasnegocioproduto.id = regrasnegocioproduto.id
            regrasnegocioproduto.id_produto = regrasnegocioproduto.id_produto
            regrasnegocioproduto.id_regra_negocio = regrasnegocioproduto.id_regra_negocio
            regrasnegocioproduto.valor = regrasnegocioproduto.valor
            regrasnegocioproduto.data_inicio = regrasnegocioproduto.data_inicio
            regrasnegocioproduto.data_fim = regrasnegocioproduto.data_fim
            return regrasnegocioproduto;
        },
        deleteRegranegocioproduto: (_, {id}) => {
            const filteredRegrasnegocioprodutos = db.regrasnegocioprodutos.filter((regrasnegocioproduto) => regrasnegocioproduto.id !== id );
            regrasnegocioprodutos = filteredRegrasnegocioprodutos;
            return true;

        }
        }
    };