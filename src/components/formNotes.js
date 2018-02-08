import FormInput from './formInput.js';
import FormTextArea from './formTextArea.js';
import FormButton from './formButton.js';
import Form from './form.js';

function FormNotes(props) {

    let inputTitle = createTitle(props.note);
    let textArea = createTextArea(props.note);

    let child = props.note.editing == true ? 'Alterar' :  '<i class="fa fa-times" aria-hidden="true"></i>'; 
    let button = createButton(props.note, props.position, child, inputTitle, textArea);

    let children = props.note.editing == true ? [inputTitle, textArea, button] : [button, inputTitle, textArea];

    let propsForm = {
        id: `note-${props.position}`,
        class: 'note',
        event: props.note.editing == true ? () => { } : () => updateForm(props.position),
        children: children
    }

    return new Form(propsForm)
}

const createTitle = note => {
    const props = {
        class: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        value:  note.title,
        readonly: !note.editing
    };

    return new FormInput(props);
}

const createButton = (note, position, children, inputTitle, textArea) => {

    const props = {
        class: 'note__control',
        type: 'button',
        children: children,
        event: note.editing == true ? e => updateNote(position, inputTitle, textArea) : e => removeNote(e, position)
    };
    return new FormButton(props);
}

const createTextArea = note => {
    const props = {
        class: 'note__body',
        name: 'texto',
        rows: 5,
        placeholder: 'Criar uma nota...',
        value:  note.content
    };

    return new FormTextArea(props);
}

export default FormNotes;