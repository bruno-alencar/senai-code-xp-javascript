import React from 'react'
import FormNotes from './formNotes.js'
import Section from './section.js'

export default ({
    notesList,
    createNote,
    updateNote,
    removeNote,
    updateForm
}) => {
    const props = {
        className: 'notes'
    }

    const children = notesList.getAll().map((note, i) => (
            createFormNotes(note, i, createNote, updateNote, removeNote, updateForm)
            ))
    
    return <Section {...props}>{children}</Section>
}

function createFormNotes(note, position, createNote, updateNote, removeNote, updateForm) {

    const props = {
        note,
        createNote,
        updateNote,
        removeNote,
        updateForm
    };
    
    return <FormNotes key={position} {...props} />
}