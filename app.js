var express = require("express");
app = express();
mongoose = require("mongoose");
var url = process.env.DATABASEURL || "hereYourDatabaseURLWillCome";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });

// app.set("view engine", "ejs");
// app.use(methodOverride("_method"));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));
// app.use(expressvalidator());

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
