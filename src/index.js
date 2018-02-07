import ListNotes from './listNotes.js';
import FormInput from './components/formInput.js';

const section = document.getElementsByClassName('notes')[0];

const observerList = () => {
    updateSection(section);
};

const notesList = new ListNotes(observerList);

const updateSection = section => {
    let contentNotes = "";

    for (let i = 0; i < notesList.totalCount(); i++) {

        let note = notesList.get(i);

        if (!note.editing) {


            contentNotes += `<form id="note-${i}" class="note" onclick="updateForm( ${i})">
                <button class="note__control" type="button" onclick="removeNote(event, ${i})">
                <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <h1 class="note__title"> ${note.title}</h1>
                <p class="note__body"> ${note.content}</p>
                </form>`;
        } else {

            let noteForm = document.createElement('form');
            noteForm.setAttribute('class', 'notes');

            let inputTitle = new FormInput();

            let textArea = document.createElement('textarea');
            textArea.setAttribute('class', 'note__body');
            textArea.setAttribute('name', 'texto');
            textArea.setAttribute('rows', '5');
            textArea.setAttribute('placeholder', 'Criar uma nota...');
            // textArea.value = note.content;
            textArea.innerHTML = note.content;

            let buttonItem = document.createElement('button');
            buttonItem.setAttribute('class', 'note__control');
            buttonItem.setAttribute('type', 'button');
            buttonItem.addEventListener('click', (e) => {
                updateNote(i, inputTitle, textArea);
                // updateNote(i, event.target.title, event.target.content);
            });


            contentNotes += `<form class="note">
               <input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value=" ${note.title}"/>
               <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota..."> ${note.content} </textarea>
               <button class="note__control" type="button" onclick="updateNote(${i}, this.form.titulo, this.form.texto)">Alterar</button>
               </form>`;
        }
    }

    section.innerHTML = contentNotes;
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
            notesList.splice(id.value);
        }, 300);

    }, millisecondsToWait);
}