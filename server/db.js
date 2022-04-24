const mongoose = require("mongoose");

//const url_db = 'mongodb+srv://mrabet:hamada321@cluster0.9i257.mongodb.net/gestion?retryWrites=true&w=majority';

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) { 
		console.log(error);
		console.log("Could not connect database!");
	}
};
