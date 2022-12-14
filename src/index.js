//Importaciones
require ('dotenv').config()
const express = require ("express")
//Se importa la conexion con la base de datos
const {dbConection} = require("./database/config");
const app = express();

const cors = require ("cors")
//Se iniciara la conexión con la base de datos
dbConection();

//2. MIDDELWARE
//CORS
app.use(cors());
app.use(express.json());

//3.Rutas
//Ruta principal
app.get("/", (req, res) => {
    return res.json({
      msg: "Bienvenido a mi Api para mi Ecommerce",
      autor: process.env.AUTOR,
    });
  });
//Rutas utilizadas para mi api en react de prueba
app.use("/api/users", require ("./routes/users.routes.js"));
app.use("/api/products", require("./routes/products.routes.js"));
app.use("/api/auth", require("./routes/auth.routes.js"));


app.listen(process.env.PORT, () =>{
    console.log('Servidor iniciado en el puerto ' + process.env.PORT );
});