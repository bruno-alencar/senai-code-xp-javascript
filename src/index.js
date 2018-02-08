import ListNotes from './listNotes.js';
import FormNotes from './components/formNotes.js';
import FormInput from './components/formInput.js';
import FormTextArea from './components/formTextArea.js';
import FormButton from './components/formButton.js';
import Form from './components/form.js';

const section = document.getElementsByClassName('notes')[0];

const observerList = () => {
    updateSection(section);
};

const notesList = new ListNotes(observerList);

const updateSection = section => {
    let contentNotes = "";

    while (section  .firstChild) {
        section.removeChild(section.firstChild);
    }

    for (let i = 0; i < notesList.totalCount(); i++) {

        let note = notesList.get(i);
        const form = new FormNotes({note: note, position: i, updateNote, removeNote, updateForm});
        section.appendChild(form);
        // let form;
        // if (note.editing) {

        //         let inputTitle = new FormInput({
        //             class: 'note__title',
        //             type: 'text',
        //             name: 'titulo',
        //             placeholder: 'Título',
        //             value:  note.title,
        //             readonly: !note.editing
        //         });
                
        //         let textArea = new FormTextArea({
        //             class: 'note__body',
        //             name: 'texto',
        //             rows: 5,
        //             placeholder: 'Criar uma nota...',
        //             value:  note.content
        //         });
                
        //         let buttonItem = new FormButton({
        //             class: 'note__control',
        //             type: 'button',
        //             children: 'Alterar',
        //             event: () => updateNote(i, inputTitle, textArea)
        //         });
                
        //         form = new Form({
        //             class: 'note',
        //             event: () => {},
        //             children: [inputTitle, textArea, buttonItem]
        //         });
                
        //         // contentNotes += `<form class="note">
        //         //    <input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value=" ${note.title}"/>
        //         //    <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota..."> ${note.content} </textarea>
        //         //    <button class="note__control" type="button" onclick="updateNote(${i}, this.form.titulo, this.form.texto)">Alterar</button>
        //         //    </form>`;
        // } else {
            
        //     let buttonItem = new FormButton({
        //         class: 'note__control',
        //         type: 'button',
        //         children: '<i class="fa fa-times" aria-hidden="true"></i>',
        //         event: e => removeNote(e, i)
        //     });
            
        //     let inputTitle = new FormInput({
        //         class: 'note__title',
        //         type: 'text',
        //         name: 'titulo',
        //         placeholder: 'Título',
        //         value:  note.title,
        //         readonly: !note.editing
        //     });
            
        //     let textArea = new FormTextArea({
        //         class: 'note__body',
        //         name: 'texto',
        //         rows: 5,
        //         placeholder: 'Criar uma nota...',
        //         value:  note.content
        //     });
            
        //     form = new Form({
        //         id: `note-${i}`,
        //         class: 'note',
        //         event: () => updateForm(i),
        //         children: [buttonItem, inputTitle, textArea]
        //     });

        //     // contentNotes += `<form id="note-${i}" class="note" onclick="updateForm( ${i})">
        //     //     <button class="note__control" type="button" onclick="removeNote(event, ${i})">
        //     //     <i class="fa fa-times" aria-hidden="true"></i>
        //     //     </button>
        //     //     <h1 class="note__title"> ${note.title}</h1>
        //     //     <p class="note__body"> ${note.content}</p>
        //     //     </form>`;
        // }

        section.appendChild(form);
    }
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