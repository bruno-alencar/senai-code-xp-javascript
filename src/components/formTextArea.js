import React from 'react'

export default (props, children) => React.createElement('textarea', props, children);

// function FormTextArea(props){
//     let textArea = document.createElement('textarea');

//     textArea.setAttribute('class', props.className);
//     textArea.setAttribute('name', props.name);
//     textArea.setAttribute('rows', props.rows);
//     textArea.setAttribute('placeholder', props.placeholder);
//     // textArea.value = note.content;
//     textArea.innerHTML = props.children;

//     return textArea;
// }

// // const propsTextArea = {
// //     class: 'note__body',
// //     name: 'texto',
// //     rows: 5,
// //     placeholder: 'Criar uma nota...',
// //     value:  note.content
// // }

// export default FormTextArea;
