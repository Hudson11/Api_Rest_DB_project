const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "key",
    authDomain: "key",
    databaseURL: "key",
    projectId: "key",
    storageBucket: "key",
    messagingSenderId: "key",
    appId: "key",
    measurementId: "key",
};

// Initialize Firebase  
firebase.initializeApp(firebaseConfig);

const data = require('../repo/data_10000');

class UserControllerFirebase {
    async create(req, res) {
        await firebase.database().ref('/user').push(data);
        res.json({});
    }

    async findAll(req, res) {
        const { path } = req.params;
        firebase.database().ref(`user/${path}`).on('value', (snapshot) => {
            let items = [];
            snapshot.forEach(childSnapshot => {
                let item = {};
                item['key'] = childSnapshot.key;
                item['nome'] = childSnapshot.toJSON().nome;
                item['email'] = childSnapshot.toJSON().email;
                item['username'] = childSnapshot.toJSON().username;
                items.push(item);
            });
            res.json(items)
        });
    }

    async delete(req, res) {
        const { path } = req.params;
        await firebase.database().ref(path).remove();
        res.json({})
    }
}

module.exports = new UserControllerFirebase();