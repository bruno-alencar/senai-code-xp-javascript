import React from 'react'
import FormInput from './formInput.js'
import FormTextArea from './formTextArea.js'
import FormButton from './formButton.js'
import Form from './form.js'
import Note from '../note.js'

export default ({note, position, updateNote, removeNote, updateForm}) => {
    let newNote = new Note(note.title, note.content, note.editing);
    let children;
    let action;

    let inputTitle = createInputTitle(newNote);
    let textArea = createTextArea(newNote);
    let button = createButton(newNote, position);

    if (newNote.editing) {
        children = [inputTitle, textArea, button];
        action = () => {};
    } else {
        children = [button, inputTitle, textArea];
        action = () => updateForm(position);
    }

    const props = {
        id: `note-${position}`,
        className: 'note',
        onClick: action
    }

    return React.createElement(Form, props, children);
}

const createInputTitle = newNote => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: newNote.title,
        readOnly: !newNote.editing,
        onChange: e => newNote.title = e.target.value
    };

    return React.createElement(FormInput, props);
}

const createTextArea = newNote => {
    const props = {
        className: 'note__body',
        name: 'texto',
        rows: 5,
        placeholder: 'Criar uma nota...',
        defaultValue: newNote.content,
        onChange: e => newNote.content = e.target.value
    };

    return React.createElement(FormTextArea, props);
}

const createButton = (newNote, position) => {

    let children;
    let action;

    if (newNote.editing) {
        children = 'Alterar';
        action = e => updateNote(position, newNote.title, newNote.content);
    } else {
        children = React.createElement('i', {
            className: 'fa fa-times',
            'aria-hidden': true
        });
        action = e => removeNote(e, position);
    }

    const props = {
        className: 'note__control',
        type: 'button',
        onClick: action
    };

    return React.createElement(FormButton, children);
}


// function FormNotes(props) {

//     let inputTitle = createTitle(props.note);
//     let textArea = createTextArea(props.note);

//     let child = props.note.editing == true ? 'Alterar' :  '<i class="fa fa-times" aria-hidden="true"></i>';
//     let button = createButton(props.note, props.position, child, inputTitle, textArea);

//     let children = props.note.editing == true ? [inputTitle, textArea, button] : [button, inputTitle, textArea];

//     let propsForm = {
//         id: `note-${props.position}`,
//         className: 'note',
//         onClick: props.note.editing == true ? () => { } : () => updateForm(props.position),
//         // children: children
//     }

//     return new Form(propsForm, children);
// }

// const createTitle = note => {
//     const props = {
//         className: 'note__title',
//         type: 'text',
//         name: 'titulo',
//         placeholder: 'Título',
//         value:  note.title,
//         readonly: !note.editing
//     };

//     return new FormInput(props);
// }

// const createButton = (note, position, children, inputTitle, textArea) => {

//     const props = {
//         className: 'note__control',
//         type: 'button',
//         // children: children,
//         onClick: note.editing == true ? e => updateNote(position, inputTitle, textArea) : e => removeNote(e, position)
//     };
//     return new FormButton(props, children);
// }

// const createTextArea = note => {
//     const props = {
//         className: 'note__body',
//         name: 'texto',
//         rows: 5,
//         placeholder: 'Criar uma nota...',
//         // value:  note.content
//     };

//     return new FormTextArea(props, note.content);
// }

// export default FormNotes;