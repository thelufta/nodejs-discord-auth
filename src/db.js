const { connect } = require("mongoose");
const { MONGODB_URI } = require("./configuration/config");

connect(MONGODB_URI).then((db) => console.log(db.connection.name)).catch((err) => console.error(error));
