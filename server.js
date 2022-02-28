const express = require('express');
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ` + PORT);
});