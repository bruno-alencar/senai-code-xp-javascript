import FormInput from './formInput.js';
import FormTextArea from './formTextArea.js';
import FormButton from './formButton.js';
import Form from './form.js';

function FormNotes(props) {

    let inputTitle = createTitle(props.note);
    let textArea = createTextArea(props.note);

    let child = props.note.status == true ? 'Alterar' :  '<i class="fa fa-times" aria-hidden="true"></i>'; 
    let button = createButton(props.note, props.position, child);

    let propsForm = {
        class: 'notes',
        event: props.note.status == false ? () => { } : () => updateForm(props.position),
        children: [inputTitle, textArea, button]
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
        readonly: !note.status
    };

    return new FormInput(props);
}

const createButton = (note, position, children) => {

    const props = {
        class: 'note__control',
        type: 'button',
        children: children,
        event: note.status ? e => updateNote(position, e.targe.title, e.target.content) : e => removeNote(e, position)
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