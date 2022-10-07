const db = require("../../../db");

module.exports = {
    Query: {
        lead(obj, args) {
            return db.leads.find((lead) => lead.id === id);
        },
        leads : () => db.leads,
    },
    Mutation: {
        create: (_,{id, nome, cpf, celular, email, cidade, uf, valor_disponivel, idade, status, canal}) => {
            const lead = {id, nome, cpf, celular, email, cidade, uf, valor_disponivel, idade, status, canal};
            db.leads.push(lead);
            return lead;
        },
        update: (_, {id, nome, cpf, celular, email, cidade, uf, valor_disponivel, idade, status, canal}) => {
            const lead = db.leads.find((lead)=> lead.id ===id);
            lead.id = lead.id
            lead.nome = nome ? nome : lead.nome
            lead.cpf = cpf ? cpf : lead.cpf
            lead.celular = celular ? celular : lead.celular
            lead.email = email ? email : lead.email
            lead.cidade = cidade ? cidade : lead.cidade
            lead.uf = uf ? uf : lead.uf
            lead.valor_disponivel = valor_disponivel ? valor_disponivel : lead.valor_disponivel
            lead.idade = idade ? idade : lead.idade
            lead.status = status ? status : lead.status
            return lead;
        },
        delete: (_, {id}) => {
            const filteredLeads = leads.filter((lead) => lead.id !== id);
            leads = filteredLeads;
            return true;

        }
        }
    };