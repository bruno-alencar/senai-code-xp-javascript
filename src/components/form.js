import React from 'react'

export default (props, children) => React.createElement('form', props, children);

// function Form(props){
//     let form = document.createElement('form');

//     form.setAttribute('id', props.id);
//     form.setAttribute('class', props.className);
//     for (let i = 0; i < props.children.length; i++) {
//         form.appendChild(props.children[i]);
//     }
    
//     form.addEventListener('click', props.event);
//     return form;
// }

// // const propsForm = {
// //     class: 'notes'
// // }

// export default Form;