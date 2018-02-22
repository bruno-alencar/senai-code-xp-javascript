import Note from './note.js'; 

class ListNotes {
    constructor(observer) {
        this._internList = [];
        this._observer = observer;
    }

    push(title, content) {
        let note = new Note(undefined, title, content);
        this._internList.push(note);
        this._observer(this);
    }

    splice(id) {
        this._internList.splice(id, 1);
        this._observer(this);
    }

    update(id) {
        this._internList[id].editing = true;
        this._observer(this);
    }

    save(id, newTitle, newContent) {
        this._internList[id].title = newTitle;
        this._internList[id].content = newContent;
        this._internList[id].editing = false;
        this._observer(this);
    }

    get(id) {
        return this._internList[id];
    }

    totalCount() {
        return this._internList.length;
    }

    getAll() {
        return this._internList;
    }
}

export default ListNotes;