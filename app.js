const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let items = [];
let workItems = [];

app.get("/", function (req, res) {

    res.render('list', { listTitle: date.getDay(), items: items });

});
app.post("/", function (req, res) {
    console.log(req.body.list);
    if (req.body.list === "Work") {

        workItems.push(req.body.item);
        res.redirect("/work");
    }
    else {
        items.push(req.body.item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {

    res.render('list', { listTitle: "Work List", items: workItems });
});


app.get("/about", function (req, res) {

    res.render("about");
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});