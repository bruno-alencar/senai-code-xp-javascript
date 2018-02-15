class Note {
    constructor(title, content, editing = false) {
        this._title = title;
        this._content = content;
        this._editing = editing;
    }

    get title() {
        return this._title;
    }

    set title(title) {

        (title !== null && title.length > 5) ? this._title = title : alert("Title is not valid!");
    }

    get content() {
        return this._content;
    }

    set content(content) {
        (content !== null && content.length > 5) ? this._content = content : alert("Content is not valid!");
    }

    get editing() {
        return this._editing;
    }
    
    set editing(status) {
        this._editing = status;
    }
}

export default Note;