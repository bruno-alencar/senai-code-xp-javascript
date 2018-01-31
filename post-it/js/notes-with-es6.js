var notes = [];

var notesList = {
    section: document.getElementsByClassName("notes")[0],
    internList: [],
    create: function (title, content) {
        var note = {
            title: title,
            content: content,
            editing: false
        };

        this.internList.push(note);

        updateSection(this.section);
    },
    delete: function (id) {
        this.internList.splice(id, 1);
        updateSection(this.section);
    },
    update: function (id) {
        this.internList[id].editing = true;
        updateSection(this.section);
    },
    save: function (id, newTitle, newContent) {
        this.internList[id].title = newTitle;
        this.internList[id].content = newContent;
        this.internList[id].editing = false;
        updateSection(this.section);
    },
    get: function (id) {
        return this.internList[id];
    },
    totalCount: function () {
        return this.internList.length;
    }
}

var count = 0;

function updateSection(section) {
    var contentNotes = "";

    // notes.forEach(element => {

    //     if (!element.editing) {
    //         contentNotes +=<form id="note-' + element.id + '" class="note" onclick="updateForm(' + element.id + ', this.parentElement)">' +
    //             '<button class="note__control" type="button" onclick="removeNote(event,' + element.id + ', this.form.parentElement)">' +
    //             '<i class="fa fa-times" aria-hidden="true"></i>' +
    //             '</button>' +
    //             '<h1 class="note__title">' + element.title + '</h1>' +
    //             '<p class="note__body">' + element.content + '</p>' +
    //             '</form>';
    //     } else {
    //         contentNotes += '<form class="note">' +
    //             '<input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value="' + element.title + '" />' +
    //             '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + element.content + '</textarea>' +
    //             '<button class="note__control" type="button" onclick="updateNote(' + element.id + ', this.form.titulo, this.form.texto, this.form.parentElement)">Alterar</button>' +
    //             '</form>';
    //     }
    // });

    for (let i = 0; i < notesList.totalCount(); i++) {

        var note = notesList.get(i);

        if (!note.editing) {
            contentNotes += `<form id="note-${i}" class="note" onclick="updateForm( ${i})">
                <button class="note__control" type="button" onclick="removeNote(event, ${i})">
                <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <h1 class="note__title"> ${note.title}</h1>
                <p class="note__body"> ${note.content}</p>
                </form>`;
        } else {
            contentNotes +=`<form class="note">
               <input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value=" ${note.title}"/>
               <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota..."> ${note.content} </textarea>
               <button class="note__control" type="button" onclick="updateNote(${i}, this.form.titulo, this.form.texto)">Alterar</button>
               </form>`;
        }
    }

    section.innerHTML = contentNotes;
}

function updateForm(id) {
    notesList.update(id);
}

function createNote(title, content, form) {
    notesList.create(title.value, content.value);
    form.reset();
}

function updateNote(id, newTitle, newContent) {
    notesList.save(id, newTitle.value, newContent.value);
}

function removeNote(event, id) {
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