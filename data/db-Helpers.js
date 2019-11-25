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

function findT(id){
    return db('tasks')
        .join('project', 'project.id', 'tasks.project_id')
        .select('id', 'description', 'notes', 'project_id', 'completed')
        .where('tasks.project_id', id)
}

function findR(){
    return db('resources')
}

function insertP(project){
    return db('projects')
        .insert(project)
        .then(() => ({ message: 'successfully added project'}));
}

function insertT(task){
    return db('tasks')
        .insert(task)
        .then(() => ({ message: 'successfully added task'}));
}

function insertR(resource){
    return db('resources')
        .insert(resource)
        .then(() => ({ message: 'successfully added resource'}));
}