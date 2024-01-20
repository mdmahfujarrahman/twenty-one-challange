import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
    mongodbUri: process.env.MONGODB_URI,
    port: process.env.PORT,
};
