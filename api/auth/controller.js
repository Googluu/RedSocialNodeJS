const bcrypt = require('bcrypt');

const auth = require('../../auth/generate.token');
const TABLA = 'auth';

const TABLE = require('../../store/mysql');

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    const login = async (username, password) => {
        let data = await store.query(TABLE, { username: username })
        
        if(!data){
            data = { password: ''}
        }

        return bcrypt.compare(password, data.password)
        .then((isValid) => {
            if(isValid){
                //TOKEN GENERATE
                return jwt.sign({ ...data })         
            }else{
                throw error('Invalid information')
            }
        }).catch((err) => {
            throw error(err.message, 403)
        })
    

    // async function login(username, password) {
    //     const data = await store.query(TABLA, { username: username });

    //     const same = bcrypt.compare(password, data.password);
    //         if(!same) {
    //             throw new Error('Información. invalidad');
    //         }
    //             return auth.sign(data);

        // return bcrypt.compare(password, data.password) 
        //     .then(soniguales => {
        //         if (soniguales === true) {
        //             // Generate token 
        //             return auth.sign(data);
        //         } else {
        //             throw new Error('Información. invalidad');
        //         }
        //     })
    }

    async function upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.upsert(TABLA, authData);
    }

    return {
        upsert,
        login
    };
};