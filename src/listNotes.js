import Note from './note.js'; 

class ListNotes {
    constructor(observer) {
        this._internList = [];
        this._observer = observer;
    }

    push(title, content) {
        // let note = new Note(undefined, title, content);
        // this._internList.push(note);

        let note = new Note(this._internList.length, title, content)
        this._internList = this._internList.concat(note)
        this._observer(this);
    }

    splice(position) {
        // this._internList.splice(position, 1);

        this._internList = this._internList.filter(note => note.position !== position)
        this._observer(this);
    }

    update(position) {
        // this._internList[position].editing = true;

        this._internList = this._internList.map(note => {
            if (note.position === position) {
                return new Note(position, note.title, note.content, true)
            } else {
                return note
            }
        })

        this._observer(this);
    }

    save(position, newTitle, newContent) {
        // this._internList[position].title = newTitle;
        // this._internList[position].content = newContent;
        // this._internList[position].editing = false;
        
        this._internList = this._internList.map(note => {
            if (note.position === position) {
                return new Note(position, newTitle, newContent, false)
            } else {
                return note
            }
        })
        this._observer(this);
    }

    get(position) {
        return this._internList[position];
    }

    totalCount() {
        return this._internList.length;
    }

    getAll() {
        return this._internList;
    }
}

export default ListNotes;