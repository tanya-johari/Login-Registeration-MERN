
const mongoose = require("mongoose");


const connectDB = async () => {
	try {
		const conn = await mongoose.connect(' mongodb://127.0.0.1:27017/login-register-mern', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log(`MongoDB connected ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
