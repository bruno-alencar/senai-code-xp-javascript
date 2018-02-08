function FormButton(props) {
    let button = document.createElement('button');

    button.setAttribute('class', props.class);
    button.setAttribute('type', props.type);
    button.addEventListener('click', props.event);

    button.innerHTML = props.children;

    return button;
}

// const propsButton = {
//     class: 'note__control',
//     type: 'button',
//     event: e => {
//         updateNote(i, inputTitle, textArea);
//         // updateNote(i, event.target.title, event.target.content);
//     }
// }

export default FormButton;