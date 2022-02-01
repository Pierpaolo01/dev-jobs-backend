import {DataTypes} from "sequelize";
import db from '../utilities/database';

const User = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})

export default User
