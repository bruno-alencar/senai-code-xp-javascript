import React from 'react'

export default (props, children) => React.createElement('button', props, children);


// function FormButton(props, children){
//     return React.createElement('button', props, children);
// }

// function FormButton(props) {
//     let button = document.createElement('button');

//     button.setAttribute('class', props.class);
//     button.setAttribute('type', props.type);
//     button.addEventListener('click', props.event);

//     button.innerHTML = props.children;

//     return button;
// }

// export default FormButton;