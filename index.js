const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");

// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passportB2C")(passport);

// User Router Middleware
app.use("/api/userb2c", require("./routes/usersB2C.router"));
app.use("/api/userb2b", require("./routes/usersB2B.router"));
app.use("/api/address", require("./routes/address.router"));
app.use("/api/compCat", require("./routes/CompanyCategorie.router"));
app.use("/api/product", require("./routes/product.router"));
app.use("/api/cart", require("./routes/cart.router"));
app.use("/api/prodCat", require("./routes/ProductCategorie.router"));
app.use("/api/working", require("./routes/working.router"));
app.use("/api/request", require("./routes/request.router"));
app.use("/api/company", require("./routes/company.router"));

const startApp = async () => {
  try {
    // Connection With DB
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    success({
      message: `Successfully connected with the Database \n${DB}`,
      badge: true
    });

    // Start Listenting for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true
    });
    startApp();
  }
};

startApp();
