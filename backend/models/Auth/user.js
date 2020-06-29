module.exports = (sequelize, type) => sequelize.define('user', {
	id: {
		autoIncrement: true,
		primaryKey: true,
		type: type.INTEGER,
	},
	username: {
		type: type.STRING,
		allowNull: false,
	},
	phone: {
		type: type.STRING,
		allowNull: false,
	},
	password: {
		type: type.STRING,
		allowNull: false,
	},
	createdAt: {
		type: type.DATE,
		allowNull: false,
	},
	updatedAt: {
		type: type.DATE,
		allowNull: false,
	},
	resetPasswordToken: type.STRING,
	resetPasswordExpires: type.DATE,
});