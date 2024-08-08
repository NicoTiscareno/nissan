import {Schema, model} from "mongoose"

export const esquema1 = new Schema ({
    nombre:{
        type:String
    },
    apepat:{
        type:String
    },
    
})

export const modelo3 = new model ('entrenadores', esquema1)
