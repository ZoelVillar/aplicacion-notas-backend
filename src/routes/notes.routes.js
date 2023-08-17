import { Router } from 'express'
import * as notesController from '../controllers/notes.controller.js'

const router = Router()

router.get('/notes', notesController.getNotes)
router.get('/notes/:id', notesController.getNote)
router.post('/notes', notesController.createNote)
router.put('/notes/:id', notesController.updateNote)
router.delete('/notes/:id', notesController.deleteNote)

export default router
