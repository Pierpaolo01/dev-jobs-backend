import {Sequelize} from "sequelize";

const db = new Sequelize('dev-jobs-backend-mysql', 'root' ,'', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db
