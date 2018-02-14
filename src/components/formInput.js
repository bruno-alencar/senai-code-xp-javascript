import React from 'react'

export default props => React.createElement('input', props);


// function FormInput(props) {
//     let input = document.createElement('input');

//     input.setAttribute('class', props.className);
//     input.setAttribute('type', props.type);
//     input.setAttribute('name', props.name);
//     input.setAttribute('placeholder', props.placeholder);
//     input.setAttribute('value', props.value);

//     if(props.readonly) 
//         input.setAttribute('readonly', true);

//     return input;
// }

// const propsInput = {
//     class: 'note__title',
//     type: 'text',
//     name: 'titulo',
//     placeholder: 'Título',
//     value:  note.title
// }

// export default FormInput;