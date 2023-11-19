import { RequestHandler } from "express";
import Note from "../models/note";


//add type for the req.body
export interface IncomingBody {
    title: string;
    description: string
}

export const getAllNote: RequestHandler = async (req ,res) => {
    const notes = await Note.find();

    res.json({ notes : notes.map((note) => {
        return {
            id: note._id,
            title: note.title,
            description: note.description
        }
    }) });
};

export const getOneNote: RequestHandler = async (req ,res) => {
    const {noteId} = req.params
    const note = await Note.findById(noteId);
    if (!note) return res.json({ error: "Could note find note"});

    // await note.save();
    
    res.json({note : {
        id: note._id,
        title: note.title,
        description: note.description
    }})
};

export const createNote: RequestHandler = async (req, res) => {
    // create new note/task
    //Add <NoteDocument> right after new Note
    // to add type to this schema
    //it is exported from note.ts
    const newNote = new Note({
        //add type for the req.body
        //title: (req.body as IncomingBody).title,
        title: req.body.title,
        description: req.body.description
    });

    await newNote.save()
    res.json({ 
        note: {
            id: newNote._id, 
            title: newNote.title, 
            description: newNote.description
        } });
};

export const patchNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findById(noteId)
    if (!note) return res.json({ error: "Note not found" });

    const { title, description } = req.body as IncomingBody;
    if (title) note.title = title;
    if (description) note.description = description;

    // another way of updating note/task
    // const note = await Note.findByIdAndUpdate(noteId, {title, description}, {new:true})
    // if (!note) return res.json({error: "Note not found"});

    await note.save();

    res.json({ note });

};

export const deleteNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;

    const removedNote = await Note.findByIdAndDelete(noteId);
    if (removedNote) return res.json({ message: "Note removed successfully"});

    res.json({ message: "Could not remove note"});

};

