const express = require("express");
const bodyParser = require("body-parser");
const contactsRouter = require('./routers/contacts-routers')
const vehiclesRouter = require('./routers/vehicles-routers');
const commentsRouter = require("./routers/comments-routers");
const app = express();
const port = process.env.PORT || 4001;
// lets express know to serve up these files anytime it's called
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactsRouter)
app.use(vehiclesRouter)
app.use(commentsRouter)

// create routes here



// end routes here

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

//res.status to catch errors and give response
