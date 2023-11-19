import { Router } from "express";
import { createNote, deleteNote, getAllNote, getOneNote, patchNote } from "../controllers/note";

const router = Router();

// read all notes/tasks
router.get('/', getAllNote);

// get one spicific note/task
router.get('/:noteId', getOneNote);

// create one note/task
router.post('/create', createNote);

// update note/task
router.patch("/:noteId", patchNote);

// delete note/task
router.delete("/:noteId", deleteNote);


export default router