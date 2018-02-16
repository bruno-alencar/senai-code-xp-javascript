import React from 'react'
import Main from './main.js'
import SectionNotes from './sectionNotes.js'
import FormNotes from './formNotes.js'
import Note from './Note.js'
import ListNotes from './listNotes.js'

const observerList = () => {
    updateSection(section);
};
const notesList = new ListNotes(observerList);

export default () => {
    const props = {
        className = 'container'
    }

    let form = createFormNotes()
    let section = createSectionNotes();

    let children = [form, section]

    return React.createElement(Main, props, children);
}

const createFormNotes = () => {
    const props = {
        note: new Nota('', ''),
        updateNote: createNote,
        removeNote: null,
        updateForm : null,
    };

    return React.createElement(FormNotes, propsNote);
}

const createSectionNotes = () => ({
    notesList,
    updateNote,
    removeNote,
    updateForm
}) => {
    const props = {
        notesList,
        updateNote, 
        removeNote,
        updateForm
    };

    return React.createElement(Main, props);
}

// interactions functions

window.updateForm = id => notesList.update(id);

window.createNote = (title, content, form) => {
    notesList.push(title.value, content.value);
    form.reset();
}

window.updateNote = (id, newTitle, newContent) => notesList.save(id, newTitle.value, newContent.value);

window.removeNote = (event, id) => {
    event.stopPropagation();

    var millisecondsToWait = 500;
    setTimeout(function () {
        var item = document.getElementById('note-' + id);
        item.classList.add('animation-test');

        setTimeout(function () {
            notesList.splice(id);
        }, 300);

    }, millisecondsToWait);
}
