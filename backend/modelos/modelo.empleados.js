import { esquema } from "./modelo.becarios.js"
import{model} from "mongoose"


export const modelo1 = new model('empleados', esquema)