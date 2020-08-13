const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require('./routers/contacts-routers')
const app = express();
const port = process.env.PORT || 4001;
// lets express know to serve up these files anytime it's called
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactsRouter)
// create routes here

// end routes here


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
