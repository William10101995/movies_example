//Import Routers
import {Router} from 'express'
//Import fuctions Routes
import * as moviesCtrl from '../controller/controller'
//Metodh Router
const router = Router();


//Routes
//GET: Obtener
router.get('/movies',moviesCtrl.getMovies); //Obtener peliculas

//POST: Agregar
router.post('/movies', moviesCtrl.createMovie); //Alta de pelicula

//PUT: Actualizar
router.put('/movies/:_id', moviesCtrl.updateMovie); //Actualizar pelicula, por parametro paso ID

//DELETE: Borrar 
router.delete('/movies/:_id', moviesCtrl.deleteMovie); //Borrar pelicula, por parametro paso ID

export default  router;