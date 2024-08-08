import {Schema, model} from "mongoose"

export const esquema2 = new Schema ({
    nombre:{
        type:String
    },
    cantidad:{
        type:Number
    },
    
})

export const modelo5 = new model ('nomina', esquema2)
