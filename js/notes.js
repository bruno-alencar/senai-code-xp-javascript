var notes = [];

var note = {
    id: "",
    title: "",
    content: "",
    editing: true
};

var count = 0;

function updateSection(section) {
    var contentNotes = "";  

    notes.forEach(element => {
        if (!element.editing) {
            contentNotes += '<form class="note" onclick="updateForm(' + element.id + ', this.parentElement)">' +
                '<button class="note__control" type="button" onclick="removeNote(' + element.id + ', this.form.parentElement)">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</button>' +
                '<h1 class="note__title">' + element.title + '</h1>' +
                '<p class="note__body">' + element.content + '</p>' +
                '</form>';
        } else {
            contentNotes += '<form class="note">' +
                '<input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value="' + element.title + '" />' +
                '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + element.content + '</textarea>' +
                '<button class="note__control" type="button" onclick="createNote(this.form.titulo, this.form.texto, this.form, this.form.nextElementSibling)">Concluído</button>' +
                '</form>';
        }
    });
    section.innerHTML = contentNotes;
}

function updateForm(id, section) {
    notes[id].editing = true;

    updateSection(section);
}

function createNote(title, content, form, section) {
    var note = {
        id: count++,
        title: title.value,
        content: content.value,
        editing: false
    };

    notes.push(note);

    updateSection(section);

    form.reset();
}

function removeNote(id, section) {
    notes.splice(id, 1);

    updateSection(section);
}