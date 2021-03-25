const {
    ideas,
} = require(`${__dirname}/ideas.js`);
const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(
        `${__dirname}/index.html`
    );
});

app.get("/api", (req, res) => {
    console.log("req");
    res.status(200);
    res.send(JSON.stringify(ideas));
});

app.listen(
    3000,
    console.log("Running on port 3000")
);
