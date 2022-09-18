const { Router } = require("express");

const {
    getProducts,
    postProducts,
    upDateProducts,
    deleteProducts,
    getProduct
} = require ("../controllers/products.controller.js");

//Middleware
const { validarJWT } = require("../middlewares/jwt.middleware.js")

const router = Router();

router.get("/", validarJWT, getProducts);

router.post("/", postProducts);

router.put("/:idProducto", upDateProducts);

router.delete("/:idProducto", deleteProducts);

router.get("/:idProducto", getProduct);

//Esta es una exportacion default
//cuando se usa una con parametros es con {}
module.exports = router;