import React from 'react'
import ListNotes from './listNotes.js';
import FormNotes from './components/formNotes.js';
import FormInput from './components/formInput.js';
import FormTextArea from './components/formTextArea.js';
import FormButton from './components/formButton.js';
import Form from './components/form.js';
import SectionNote from './components/notesSection.js';

const section = document.getElementsByClassName('notes')[0];

const observerList = () => {
    updateSection(section);
};

const notesList = new ListNotes(observerList);

const updateSection = section => {
    // Clean
    // section.innerHTML = '';


    let props = {notesList, updateNote, removeNote, updateForm};
    return React.createElement(SectionNote, props);

    // for (let i = 0; i < notesList.totalCount(); i++) {

    //     let note = notesList.get(i);
    //     const form = new FormNotes({note: note, position: i, updateNote, removeNote, updateForm});
    //     section.appendChild(form);
    // }
}

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