const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public/js")));


app.listen(port , () => {
    console.log(`listening to port ${port}.......`);
});
app.get("/",(req,res) => {
    res.render("module.ejs");
})

app.get("/search/:name",(req,res) => {
    let { name } = req.params;
    let usr_name = name.slice(5);
    res.render("module.ejs",{usr_name});
});





// app.use((req,res) => {
//     res.send("hello everyone");
// });

