const db = require("../../../db");

module.exports = {
    Query: {
        produto(obj, args) {
            return db.produtos.find((produto) => produto.id === id);
        },
        produtos : () => db.produtos,
    },
    Mutation: {
        createProduto: (_,{id, produt_o, descricao, banco}) => {
            const produto = {id, produt_o, descricao, banco};
            db.produtos.push(produto);
            return produto;
        },
        updateProduto: (_, {id, produto, descricao, banco}) => {
            const produtoatual = db.produtos.find((produto) => produto.id === id);
            produtoatual.id = produtoatual.id
            produtoatual.produt_o = produtoatual.produt_o
            produtoatual.descricao = produtoatual.descricao
            produtoatual.banco = produtoatual.banco
            return produtoatual;
        },
        deleteProduto: (_, {id}) => {
            const filteredProdutos = db.produtos.filter((produto) => produto.id !== id);
            produtos = filteredProdutos;
            return true;

        },
        },
    };
