import React from 'react'
import FormInput from './formInput.js'
import FormTextArea from './formTextArea.js'
import FormButton from './formButton.js'
import Form from './form.js'
import Note from '../note.js'

export default ({note, createNote, updateNote, removeNote, updateForm}) => {
    let newNote = new Note(note.position, note.title, note.content, note.editing);
    let children;
    let action;

    let inputTitle = createInputTitle(newNote);
    let textArea = createTextArea(newNote);
    let button = createButton(newNote, removeNote);
    let buttonConcluir = montaButtonConcluir(newNote, createNote)

    const props = {
        className: 'note',
    }

    if (newNote.estaVisualizando()) {
        props.onClick = () => updateForm(newNote.posicao)
    }
  
    return (<Form {...props}> 
            {newNote.estaAlterando() && button}
            {inputTitle}
            {textArea}
            {(newNote.estaCadastrando() || newNote.estaAlterando()) && buttonConcluir}
          </Form>
          )
}

const createInputTitle = newNote => {
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: newNote.title,
        onChange: e => newNote.title = e.target.value
    };

    if (newNote.estaVisualizando()) {
        props.readOnly = true
    }

    return <FormInput {...props}/>;
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

    if(newNote.estaVisualizando())
        props.readOnly = true;

    return <FormTextArea {...props}/>;
}

const createButton = (newNote, removeNote) => {

    const props = {
        className: 'note__control',
        type: 'button',
        onClick: event => {
            event.stopPropagation()
            removeNote(event, newNote.posicao)
        }
    };
    const children = <i className='fa fa-times' aria-hidden={true} />

    return <FormButton {...props}>{children}</FormButton>
}

function montaButtonConcluir(newNote, createNote) {

    const props = {
        className: 'note__control', 
        type: 'button', 
        onClick: event => {
            createNote(newNote.position, newNote.title, newNote.content)
            event.target.form.reset();
        }
    }

    const children = 'Concluído'

    return <FormButton {...props}>{children}</FormButton>
}
