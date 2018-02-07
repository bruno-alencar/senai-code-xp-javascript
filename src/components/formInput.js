function FormInput() {
    let inputTitle = document.createElement('input');

    inputTitle.setAttribute('class', 'note__title');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', 'titulo');
    inputTitle.setAttribute('placeholder', 'Título');
    inputTitle.setAttribute('value', note.title);
    return inputTitle;
}

export default FormInput;