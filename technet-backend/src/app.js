import express from "express";
import cors from "cors";
import routes from "./app/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", routes);

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API endpoint doesn't exist",
        erroeMessages: [
            {
                path: "",
                message: "API endpoint doesn't exist",
            },
        ],
    });
});

export default app;
