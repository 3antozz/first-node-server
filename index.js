const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).sendFile("./index.html", { root: "./" }, (err) =>
        console.log(err)
    );
});
app.get("/about", (req, res) => {
    res.status(200).sendFile("./about.html", { root: "./" }, (err) =>
        console.log(err)
    );
});
app.get("/contact-me", (req, res) => {
    res.status(200).sendFile("./contact-me.html", { root: "./" }, (err) =>
        console.log(err)
    );
});

app.get("*", (req, res) => {
    res.status(200).sendFile("./404.html", { root: "./" }, (err) =>
        console.log(err)
    );
});

app.listen(3000);
