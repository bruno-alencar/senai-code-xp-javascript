class Note {
    constructor(title, content){
        this.title = title;
        this.content = content;
        this.status = false;
    }
}

class ListNotes {
    constructor() {
        this._section = document.getElementsByClassName("notes")[0];
        this._internList = [];
    }

    create(title, content) {
        // var note = {
        //     title: title,
        //     content: content,
        //     editing: false
        // };
        let note = new Note(title, content);

        this._internList.push(note);
        updateSection(this._section);
    }

    delete(id) {
        this._internList.splice(id, 1);
        updateSection(this._section);
    }

    update(id) {
        this._internList[id].editing = true;
        updateSection(this._section);
    }

    save(id, newTitle, newContent) {
        this._internList[id].title = newTitle;
        this._internList[id].content = newContent;
        this._internList[id].editing = false;
        updateSection(this._section);
    }

    get(id) {
        return this._internList[id]
    }

    totalCount() {
        return this._internList.length
    }
}

const notesList = new ListNotes();

// const notesList = {
//     section: document.getElementsByClassName("notes")[0],
//     internList: [],
//     create(title, content) {
//         var note = {
//             title: title,
//             content: content,
//             editing: false
//         };

//         this.internList.push(note);
//         updateSection(this.section);
//     },
//     delete(id) {
//         this.internList.splice(id, 1);
//         updateSection(this.section);
//     },
//     update(id) {
//         this.internList[id].editing = true;
//         updateSection(this.section);
//     },
//     save(id, newTitle, newContent) {
//         this.internList[id].title = newTitle;
//         this.internList[id].content = newContent;
//         this.internList[id].editing = false;
//         updateSection(this.section);
//     },
//     get(id) {
//         this.internList[id]
//     },
//     totalCount() {
//         this.internList.length
//     }
// }

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
            contentNotes += `<form class="note">
               <input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value=" ${note.title}"/>
               <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota..."> ${note.content} </textarea>
               <button class="note__control" type="button" onclick="updateNote(${i}, this.form.titulo, this.form.texto)">Alterar</button>
               </form>`;
        }
    }

    section.innerHTML = contentNotes;
}

const updateForm = id => notesList.update(id);

const createNote = (title, content, form) => {
    notesList.create(title.value, content.value);
    form.reset();
}

const updateNote = (id, newTitle, newContent) => notesList.save(id, newTitle.value, newContent.value);

const removeNote = (event, id) => {
    event.stopPropagation();

    var millisecondsToWait = 500;
    setTimeout(function () {
        var item = document.getElementById('note-' + id);
        item.classList.add('animation-test');

        setTimeout(function () {
            notesList.delete(id.value);
        }, 300);

    }, millisecondsToWait);
}