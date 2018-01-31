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
    }
}

var count = 0;

function updateSection(section) {
    var contentNotes = "";

    // notes.forEach(element => {

    //     if (!element.editing) {
    //         contentNotes += '<form id="note-' + element.id + '" class="note" onclick="updateForm(' + element.id + ', this.parentElement)">' +
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

    var notes = notesList.internList;

    for (let i = 0; i < notes.length; i++) {
        if (!notes[i].editing) {
            contentNotes += '<form id="note-' + i + '" class="note" onclick="updateForm(' + i + ')">' +
                '<button class="note__control" type="button" onclick="removeNote(event,' + i + ')">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<h1 class="note__title">' + notes[i].title + '</h1>' +
                '<p class="note__body">' + notes[i].content + '</p>' +
                '</form>';
        } else {
            contentNotes += '<form class="note">' +
                '<input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value="' + notes[i].title + '" />' +
                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notes[i].content + '</textarea>' +
                '<button class="note__control" type="button" onclick="updateNote(' + i + ', this.form.titulo, this.form.texto)">Alterar</button>' +
                '</form>';
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

    var millisecondsToWait = 1000;
    setTimeout(function () {
        var item = document.getElementById('note-' + id);
        item.classList.add('animation-test');
        notesList.delete(id.value);
    }, millisecondsToWait);
}