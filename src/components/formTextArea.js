function FormTextArea(props){
    let textArea = document.createElement('textarea');

    textArea.setAttribute('class', props.class);
    textArea.setAttribute('name', props.name);
    textArea.setAttribute('rows', props.rows);
    textArea.setAttribute('placeholder', props.placeholder);
    // textArea.value = note.content;
    textArea.innerHTML = props.value;

    return textArea;
}

// const propsTextArea = {
//     class: 'note__body',
//     name: 'texto',
//     rows: 5,
//     placeholder: 'Criar uma nota...',
//     value:  note.content
// }

export default FormTextArea;