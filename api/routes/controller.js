
const TABLA = 'user';

module.exports = function (injectdStore) {
    let store = injectdStore;
    if (!store) {
        const store = require('../../store/dummy');
    }
    function list()  {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(body) {
        const user = {
            name: body.name
        }

        if(body,id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        return store.upsert(TABLA, user);
    }

    return {
        list,
        get,
        upsert
    };
}

