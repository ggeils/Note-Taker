const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRutes = require('./routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ` + PORT);
});