const { Router } = require('express');
const router = Router();

// routes

router.get('/', (req,res) => {
    res.json({"Titulo":"Hola desde mi aplicación"});
});
 

router.get('/test', (req,res) => {

    const data = {
        "name": "Marco",
        "website": "www.eramia.cl"
    };
    //res.json({"Test":"Hola desde mi aplicación Test"});

    res.json(data);
});
module.exports = router;