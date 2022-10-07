const db = require("../../../db");

module.exports = {
    Query: {
        esteiraproposta(obj, args) {
            return db.esteirapropostas.find((esteiraproposta) => esteiraproposta.id === id);
        },
        esteirapropostas : () => db.esteirapropostas,
    },
    Mutation: {
        createEsteirapropostas: (_,{id, user_id, id_produto, id_banco, id_cliente, data_abertura, n_proposta, beneficio, valor, valor_liberado, n_contrato, status}) => {
            const esteiraproposta = {id, user_id, id_produto, id_banco, id_cliente, data_abertura, n_proposta, beneficio, valor, valor_liberado, n_contrato, status};
            db.esteirapropostas.push(esteiraproposta);
            return esteiraproposta;
        },
        updateEsteirapropostas: (_, {id, user_id, id_produto, id_banco, id_cliente, data_abertura, n_proposta, beneficio, valor, valor_liberado, n_contrato, status}) => {
            const esteiraproposta = db.esteirapropostas.find((esteiraproposta) => esteiraproposta.id ===id);
            esteiraproposta.id =  esteiraproposta.id
            esteiraproposta.user_id = esteiraproposta.user_id
            esteiraproposta.id_produto = esteiraproposta.id_produto
            esteiraproposta.id_banco =  esteiraproposta.id_banco 
            esteiraproposta.id_cliente =  esteiraproposta.id_cliente
            esteiraproposta.data_abertura =  esteiraproposta.data_abertura
            esteiraproposta.n_proposta =  esteiraproposta.n_proposta
            esteiraproposta.beneficio =  esteiraproposta.beneficio
            esteiraproposta.valor =  esteiraproposta.valor
            esteiraproposta.valor_liberado =  esteiraproposta.valor_liberado
            esteiraproposta.n_contrato =  esteiraproposta.n_contrato
            esteiraproposta.status = esteiraproposta.status
            return esteiraproposta;
        },
        deleteEsteirapropostas: (_, {id}) => {
            const filteredEsteirapropostas = db.esteirapropostas.filter((esteiraproposta) => esteiraproposta.id !== id);
            esteirapropostas = filteredEsteirapropostas;
            return true;

        }
        }
    };