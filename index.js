const express = require('express');
const path = require('path');
const session = require('express-session');
const Useroutes = require('./Routes/Useroutes');

const app = express();
const tet = path.resolve();
app.use(express.static(path.join(tet, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(session({
    secret: 'ari@23',
    resave: false,
    saveUninitialized: true
}));
app.use("/", Useroutes);

app.get("/",(req,res,next)=>{
    res.render("app.ejs", {
        title: "Tax Calculator",

    });
});

s
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
