const express = require("express");
const app = express();
const db = require("./models");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors')

const PORT = process.env.PORT || 7000;

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


const apiRoutes = require("./routes/index");
app.use("/", apiRoutes);

db.sequelize.sync({alter: true}).then(() => {
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`listening on: http://localhost:${PORT}`);
    });
}).catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
});