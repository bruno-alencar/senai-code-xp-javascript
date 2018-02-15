import React from 'react'
import FormNotes from './formNotes.js'
import Section from './section.js'

export default ({
    notesList,
    updateNote,
    removeNote,
    updateForm
}) => {
    const children = [];
    const props = {
        className: 'notes'
    }

    for (let i = 0; i < notesList.totalCount(); i++) {
        children.push(createFormNotes(notesList.get(i), i));
    }

    return React.createElement(Section, props, children);
}

const createFormNotes = (note, position) => { 

    const props = {
        note: note,
        position: position,
        updateNote: updateNote,
        removeNote: removeNote,
        updateForm: updateForm
    };

    return React.createElement(FormNotes, propsNote, children);
}