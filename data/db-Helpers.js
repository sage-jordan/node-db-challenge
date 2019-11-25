const db = require('./db-Config');

module.exports = {
    findP,
    findT,
    findR,
    insertP,
    insertT,
    insertR
};

function findP() {
    return db('projects')
}

function findT(){
    return db('tasks')
}

function findR(){
    return db('resources')
}

function insertP(project){
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }));
}

function insertT(task){
    return db('tasks')
        .insert(task)
        .then(ids => ({ id: ids[0] }));
}

function insertR(resource){
    return db('resources')
        .insert(resource)
        .then(ids => ({ id: ids[0] }));
}