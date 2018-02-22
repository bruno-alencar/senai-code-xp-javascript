import React from 'react'
import SectionNotes from './sectionNotes.js'
import FormNotes from './formNotes.js'
import Note from '../note.js'
import ListNotes from '../listNotes.js'

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.updatePage = this.updatePage.bind(this);
        this.createNote = this.createNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.state = { notesList: new ListNotes(this.updatePage) }
    }

    updatePage(newNotesList) {
        this.setState({
            notesList: newNotesList
        })
    }

    updateForm(id) {
        this.state.notesList.update(id);
    }

    createNote(position, title, content) {
        if(this.state.notesList.get(position))
            updateNote(position, title, content);
        else
            this.state.notesList.push(title, content);

        // form.reset();
    }

    updateNote(id, newTitle, newContent) {
        this.state.notesList.save(id, newTitle, newContent);
    }

    removeNote(event, id) {
        event.stopPropagation();

        var millisecondsToWait = 500;
        setTimeout(function () {
            var item = document.getElementById('note-' + id);
            item.classList.add('animation-test');

            setTimeout(function () {
                this.state.notesList.splice(id);
            }, 300);

        }, millisecondsToWait);
    }

    render() {
        const props = {
            className: 'container'
        }
        const { state, createNote, updateNote, removeNote, updateForm } = this
        const { notesList } = state

        let form = createFormNotes(createNote, updateNote, removeNote, updateForm);
        let section = createSectionNotes(notesList, createNote, updateNote, removeNote, updateForm);

        return (<main {...props}>
                    {form}
                    {section}
                </main>)
    }
}

function createFormNotes(createNote, updateNote, removeNote, updateForm){
    const props = {
        note: new Note(undefined, '', ''),
        createNote,
        updateNote,
        removeNote,
        updateForm,
    };

    return <FormNotes {...props} />;
}

function  createSectionNotes(notesList, createNote, updateNote, removeNote, updateForm){
    const props = {
        notesList,
        createNote,
        updateNote,
        removeNote,
        updateForm
    };

    return <SectionNotes {...props} />
}

export default Page



// interactions functions