const express = require("express");

const indexRouter = require("./router/index");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", indexRouter);

let teamArray = [];

// app.get("/", function(req, res) {
//     res.status(200).json({
//         hello: "Greetings from EXPRESS",
//     });
// });

app.get("/team", function(req, res) {
    res.send("You hit the team path");
});

app.get("/team/get-team-data", function(req, res) {
    res.status(200).json({data: teamArray});
})

app.get("/team/:anyname", function (req, res) {
    console.log(req.params); //?

    res.status(200).json(req.params);
});

app.post("/team/create-team", function(req, res) {
    teamArray.push(req.body);

    res.status(200).json({data: teamArray});


    
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});