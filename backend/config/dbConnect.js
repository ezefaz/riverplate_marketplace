import mongoose from "mongoose";

async function dbConnect() {
	try {
		await mongoose.connect(
			"mongodb+srv://ezefaz:ezefaz@cluster0.zhdr5kn.mongodb.net/?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);

		console.log("MongoDB connected");
	} catch (error) {
		console.error("MongoDB connection error", error);
		process.exit(1);
	}
}

export default dbConnect;
