const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ email, password}) {
     const user = await db.User.scope('withHash').findOne({where: {email}});

     if(!user || !(await bcrypt.compare(password, user.hash)))
         throw 'Email or password is incorrect';

     const token = jwt.sign({sub: user.id}, config.secret, {expiresIn: '7d'});
     return { ...omitHash(user.get()), token};
}

async function getAll() {
    return await db.User.findAll();
}


async function getById() {
    return await getUser(id);
}

async function create(params) {
    if(await db.User.findOne({where: {email: params.email}})){
        throw 'Username "' + params.email + '" is already taken';
    }

    if(params.password){
        params.hash = await bcrypt.hash(params.password, 10);
    }

    await db.User.create(params);
}

async function update(id, params) {
    const user = await getUser(id);

    const usernameChanged = params.email && user.email !== params.email;
    if(usernameChanged && await db.User.findOne({where: {email: params.email}})){
        throw 'Username "' + params.email + '" is already taken';
    }

    if(params.password){
        params.hash = await bcrypt.hash(params.password, 10);
    }

    Object.assign(user, params);

    await user.save();

    return omitHash(user.get());
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if(!user) throw 'User not found';
    return user;
}

function omitHash(user){
    const { Hash, ...userWithoutHash } = user;
    return userWithoutHash;
}
