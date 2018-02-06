class Note {
    constructor(title, content) {
        this._title = title;
        this._content = content;
        this._status = false;
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

    get status() {
        return this._status;
    }
    
    set status(status) {
        this._status = status;
    }
}

export default Note;