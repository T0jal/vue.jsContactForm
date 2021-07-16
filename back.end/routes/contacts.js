import express from 'express'
import { getAllContacts, getContact, createContact, updateContact, deleteContact } from '../controllers/contact.js'
import { findContactById } from '../middlewares/contact.js'

const router = express.Router()

//Get all
router.get('/', getAllContacts)

//Get one
router.get('/:id', findContactById, getContact)

//Create one
router.post('/', createContact)

//Update one
router.patch('/:id', findContactById, updateContact )
router.put('/:id',findContactById, updateContact )

//Delete one
router.delete('/:id', findContactById, deleteContact)


export {router}