const db = require("../../../db");

module.exports = {
    Query: {
        clientes: () => {
            return db.clientes;
        },
        cliente:(_, {id}) => {
            return db.clientes.find((cliente) => cliente.id === id);
        }, 
    },
    Mutation: {
        createCliente: (_, {id, name, cpf, data_nascimento, logradouro, numero, complemento, bairro, cidade, cep, estado, genero, obito, status}) => {
            const cliente = {id, name, cpf, data_nascimento, logradouro, numero, complemento, bairro, cidade, cep, estado, genero, obito, status};
            db.clientes.push(cliente);
            return cliente;
        },
        updateCliente: (_, {id, name, cpf, data_nascimento, logradouro, numero, complemento, bairro, cidade, cep, estado, genero, obito, status}) => {
            const cliente = db.clientes.find(cliente => cliente.id === id);
            cliente.id = cliente.id
            cliente.name =  name ? name : cliente.name
            cliente.email = email ? email : cliente.email
            cliente.cpf = cpf ? cpf : cliente.cpf 
            cliente.data_nascimento = data_nascimento ? data_nascimento : cliente.data_nascimento
            cliente.logradouro = logradouro ? logradouro : cliente.logradouro
            cliente.numero = numero ? numero : cliente.numero
            cliente.complemento = complemento ? complemento : cliente.complemento
            cliente.bairro = bairro ? bairro : cliente.bairro
            cliente.cidade = cidade ? cidade : cliente.cidade
            cliente.cep = cep ? cep : cliente.cep
            cliente.estado = estado ? estado : cliente.estado
            cliente.genero = genero ? genero : cliente.genero
            cliente.obito = obito ? obito : cliente.obito
            cliente.status =  status ? status : cliente.status
            return cliente;
        },
        deleteCliente: (_, {id}) => {
            const filteredClientes = db.clientes.filter((cliente) => cliente.id !== id );
            clientes = filteredClientes;
            return true;

        }
    },
};