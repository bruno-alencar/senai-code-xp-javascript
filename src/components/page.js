import React from 'react'
import Main from './main.js'
import SectionNotes from './sectionNotes.js'
import FormNotes from './formNotes.js'
import Note from '../note.js'
import ListNotes from '../listNotes.js'

// const observerList = () => {
//     updateSection(section);
// };
// const notesList = new ListNotes(observerList);

class Page extends React.Component {
    constructor(props) {
        super(props);

        // this.updatePage = this.updatePage.bind()
        this.updatePage = this.updatePage.bind(this);
        this.createNote = this.createNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.state = {
            listNotes: new ListNotes(this.updatePage)
        }
    }

    updatePage(newNotesList) {
        console.log('quem é this', this);

        this.setState({
            listNotes: newNotesList
        })
    }

    render() {
        const props = {
            className: 'container'
        }
        const { state, createNote, updateNote, removeNote, updateForm } = this
        const { notesList } = state

        let form = createFormNotes(this.createNote);
        let section = createSectionNotes(this.notesList, this.createNote, this.updateNote, this.removeNote, this.updateForm);

        return <Main {...props}>
            {form}
            {section}
         </Main>
    }

    updateForm(id) {
        this.state.notesList.update(id);
    }

    createNote(title, content, form) {
        this.state.notesList.push(title.value, content.value);
        form.reset();
    }

    updateNote(id, newTitle, newContent) {
        this.state.notesList.save(id, newTitle.value, newContent.value);
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
}

export default Page

const createFormNotes = (createNote) => {
    const props = {
        note: new Note(undefined, '', ''),
        updateNote: createNote,
        removeNote: null,
        updateForm: null,
    };

    return <FormNotes {...props} />;
}

const createSectionNotes = () => ({
    notesList,
    updateNote,
    removeNote,
    updateForm
}) => {
    const props = {
        notesList,
        updateNote,
        removeNote,
        updateForm
    };

    return <SectionNotes {...props} />
}

// interactions functions