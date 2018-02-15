import React from 'react'
import FormInput from './formInput.js'
import FormTextArea from './formTextArea.js'
import FormButton from './formButton.js'
import Form from './form.js'
import Note from '../note.js'

export default props => {
    let newNote = new Note(props.note.title, props.note.content, props.note.editing);

    let inputTitle = createInputTitle(newNote);
    let textArea = createTextArea(newNote);
    let button = createButton(props.note, props.position, newNote);

    let children = props.note.editing ? [inputTitle, textArea, button] : [button, inputTitle, textArea];

    const propsForm = {
        id: `note-${props.position}`,
        className: 'note',
        onClick: props.note.editing ? () => {} : () => updateForm(props.position)
    }

    return React.createElement(Form, propsForm, children);
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

const createButton = (note, position, newNote) => {

    let children;
    let clickEvent;

    if (note.editing) {
        children = 'Alterar';
        clickEvent = e => updateNote(position, newNote.title, newNote.content);
    } else {
        children = React.createElement('i', {
            className = 'fa fa-times',
            'aria-hidden': true
        });
        clickEvent = e => removeNote(e, position);
    }

    const props = {
        className: 'note__control',
        type: 'button',
        onClick: clickEvent
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