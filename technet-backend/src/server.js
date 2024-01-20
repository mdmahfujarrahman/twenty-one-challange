import mongoose from "mongoose";
import app from "./app.js";
import { envConfig } from "./app/config/index.js";

const main = async () => {
    try {
        await mongoose.connect(envConfig.mongodbUri);
        console.log("🔗 Connected to Database");
        app.listen(envConfig.port, () => {
            console.log(`Server is listening on port ${envConfig.port}`);
        });
    } catch (error) {
        console.log(error);
        console.log("❌ Failed to connect to Database");
    }
};

main();
