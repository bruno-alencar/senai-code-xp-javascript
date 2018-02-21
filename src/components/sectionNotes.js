import React from 'react'
import FormNotes from './formNotes.js'
import Section from './section.js'

export default ({
    notesList,
    updateNote,
    removeNote,
    updateForm
}) => {
    const props = {
        className: 'notes'
    }

    // const children = listaNotas.pegaTodos().map((notaAtual, posicao) => (
    //     montaFormNotas(posicao, notaAtual, adicionarNota, removerNota, editarFormulario)
    // ))

    let children = notesList.map((note, i) => createFormNotes(note, i));

    return <Section {...props}>{children}</Section>
}

const createFormNotes = (note, position) => {

    const props = {
        note: note,
        position: position,
        updateNote: updateNote,
        removeNote: removeNote,
        updateForm: updateForm
    };

    return <FormNotes key={position} {...props} />
}