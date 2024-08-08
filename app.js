import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { test1 } from "./backend/controlador/controller.empleados.js";
import { test2 } from "./backend/controlador/controller.lideres.js";
import { test3 } from "./backend/controlador/controller.entrenadores.js";
import { test4 } from "./backend/controlador/controller.nomina.js";
import { test5 } from "./backend/controlador/controller.tecnicos.js";
import { test6 } from "./backend/controlador/controller.becarios.js";
dotenv.config();

mongoose.connect(process.env.urlbd)
.then(() => {
    console.log("al 100")
})
.catch((error) =>{
    console.log("no jala", error)
})
const app =express();
app.use(cors())
app.listen(4000, () => {
    console.log("todo correcto")
})

test1()
test2()
test3()
test4()
test5()
test6()