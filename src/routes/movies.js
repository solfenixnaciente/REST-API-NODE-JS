const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');
const _ = require('underscore');

//GET PARA OBTENER LO QUE EXISTE DE PELICULAS
router.get('/', (req,res) => {
    res.json(movies);
});


//POST PARA AGREGAR UNA PELICULA
router.post('/',(req,res) => {
    const { id, title, director,year,rating} =req.body;
    if(id && title && director && year && rating){
        const newMovie = {...req.body,id};
        movies.push(newMovie);
        res.json(movies);
    } else {
    res.send('Wrong on registre');
    }
});

//PUT MODIFICA UN REGISTRO
router.put('/:id',(req,res) => {
    const { id } = req.params;
    const { title, director,year,rating } = req.body;
    if(title && director && year && rating){

    _.each(movies, (movie,i) =>{
        if(movie.id == id){
           movie.title = title;
           movie.director = director;
           movie.year = year;
           movie.rating= rating;
        }
    });
    res.send(movies);
    } else {
        res.status(500).json({error: 'There was an error'});
    }

});



//DELETE PARA BORRAR UNA MOVIE
router.delete('/:id',(req,res) => {
    const { id } = req.params;
    _.each(movies, (movie,i) =>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.send(movies);
    

});



module.exports = router;