const route = require('express').Router();

route.get('/', (req, res) => {
    try {
        res.send("Hello from the other side");
    } catch (err) {
        res.send("Problem in starting the server");
    }
});

exports = module.exports = {
    route,
}; 