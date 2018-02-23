class Note {
    constructor(position, title, content, editing = false) {
        this._position = position;
        this._title = title;
        this._content = content;
        this._editing = editing;
    }

    get title() {
        return this._title;
    }

    set title(title) {

        this._title = title;
        // (title !== null && title.length > 5) ? this._title = title : alert("Title is not valid!");
    }

    get content() {
        return this._content;
    }

    set content(content) {
        this._content =content;
        // (content !== null && content.length > 5) ? this._content = content : alert("Content is not valid!");
    }

    get editing() {
        return this._editing;
    }

    set editing(status) {
        this._editing = status;
    }

    get position() {
        return this._position;
    }

    set position(position) {
        this._position = position;
    }

    estaCadastrando() {
        return this.position === undefined;
    }

    estaVisualizando() {
        return this.position !== undefined && !this.editing
    }

    estaAlterando() {
        return this.position !== undefined && this.editing
    }
}

export default Note;