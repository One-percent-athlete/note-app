import { Schema, model } from "mongoose";


// if want to add type to the schema
// and do not foget to add <NoteDocument> 
// right after the model down below when exporting
// export interface noteDocument {
//     title: string;
//     description?: string
// }


const noteSchema = new Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

export default model("Note", noteSchema);