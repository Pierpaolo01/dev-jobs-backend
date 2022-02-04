import {DataTypes} from "sequelize";
import db from '../utilities/database';

const Job = db.define('job', {
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    employmentType: {
        type: DataTypes.BOOLEAN,
    }

})

export default Job
