import React from 'react'
import Main from './main.js'
import SectionNotes from './sectionNotes.js'
import FormNotes from './formNotes.js'
import Note from './Note.js'
import ListNotes from './listNotes.js'

// const observerList = () => {
//     updateSection(section);
// };
// const notesList = new ListNotes(observerList);

class Page extends React.Component {
    constructor(props) {
        super(props);

        // this.updatePage = this.updatePage.bind()
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
            className = 'container'
        }

        let form = createFormNotes(this.createNote);
        let section = createSectionNotes(this.state.notesList, this.updateNote, this.removeNote, this.updateForm);

        let children = [form, section]

        return React.createElement(Main, props, children);
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

// export default () => {
//     const props = {
//         className = 'container'
//     }

//     let form = createFormNotes()
//     let section = createSectionNotes();

//     let children = [form, section]

//     return React.createElement(Main, props, children);
// }

const createFormNotes = (createNote) => {
    const props = {
        note: new Nota('', ''),
        updateNote: createNote,
        removeNote: null,
        updateForm: null,
    };

    return React.createElement(FormNotes, propsNote);
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

    return React.createElement(Main, props);
}

// interactions functions