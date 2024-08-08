import {Schema, model} from "mongoose"

export const esquema = new Schema ({
    Nombre:{
        type:String
    },
    Gmail:{
        type:String
    }

})

export const modelo6 = new model ('becarios', esquema)
