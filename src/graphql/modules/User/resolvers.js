const db = require("../../../db");

module.exports = {
    Query: {
        user(obj, args) {
            return db.users.find((user) => user.id === id);
        },
        users : () => db.users,
    },
    Mutation: {
        createUser: (_,{id, name, email, password, admin, remember_token}) => {
            const user = { id,  name, email, password, admin, remember_token};
            db.users.push(user);
            return user;
        },
        updateUser: (_, {id,  name, email, password, admin, remember_token }) => {
            const user = db.users.find(user => user.id ===id);
            user.id = user.id
            user. name =  name ? name : user.name
            user.email = email ? email : user.email
            user.password = user.password
            user.admin = admin ? admin : user.admin
            user.remember_token = user.remember_token
            return user;
        },
       
        }
    };