/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listNotes = __webpack_require__(1);

var _listNotes2 = _interopRequireDefault(_listNotes);

var _formInput = __webpack_require__(3);

var _formInput2 = _interopRequireDefault(_formInput);

var _formTextArea = __webpack_require__(4);

var _formTextArea2 = _interopRequireDefault(_formTextArea);

var _formButton = __webpack_require__(5);

var _formButton2 = _interopRequireDefault(_formButton);

var _form = __webpack_require__(6);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FormNotes from './components/formNotes.js';
var section = document.getElementsByClassName('notes')[0];

var observerList = function observerList() {
    updateSection(section);
};

var notesList = new _listNotes2.default(observerList);

var updateSection = function updateSection(section) {
    var contentNotes = "";

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    var _loop = function _loop(i) {

        var note = notesList.get(i);
        // const form = new FormNotes({note: note, position: i, updateNote, removeNote, updateForm});
        var form = void 0;
        // section.appendChild(form);
        if (note.editing) {

            var inputTitle = new _formInput2.default({
                class: 'note__title',
                type: 'text',
                name: 'titulo',
                placeholder: 'Título',
                value: note.title,
                readonly: !note.editing
            });

            var textArea = new _formTextArea2.default({
                class: 'note__body',
                name: 'texto',
                rows: 5,
                placeholder: 'Criar uma nota...',
                value: note.content
            });

            var buttonItem = new _formButton2.default({
                class: 'note__control',
                type: 'button',
                children: 'Alterar',
                event: function event() {
                    return updateNote(i, inputTitle, textArea);
                }
            });

            form = new _form2.default({
                class: 'note',
                event: function event() {},
                children: [inputTitle, textArea, buttonItem]
            });

            // contentNotes += `<form class="note">
            //    <input class="note__title" type="text" name="titulo" placeholder="Título" autofocus value=" ${note.title}"/>
            //    <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota..."> ${note.content} </textarea>
            //    <button class="note__control" type="button" onclick="updateNote(${i}, this.form.titulo, this.form.texto)">Alterar</button>
            //    </form>`;
        } else {

            var _buttonItem = new _formButton2.default({
                class: 'note__control',
                type: 'button',
                children: '<i class="fa fa-times" aria-hidden="true"></i>',
                event: function event(e) {
                    return removeNote(e, i);
                }
            });

            var _inputTitle = new _formInput2.default({
                class: 'note__title',
                type: 'text',
                name: 'titulo',
                placeholder: 'Título',
                value: note.title,
                readonly: !note.editing
            });

            var _textArea = new _formTextArea2.default({
                class: 'note__body',
                name: 'texto',
                rows: 5,
                placeholder: 'Criar uma nota...',
                value: note.content
            });

            form = new _form2.default({
                id: 'note-' + i,
                class: 'note',
                event: function event() {
                    return updateForm(i);
                },
                children: [_buttonItem, _inputTitle, _textArea]
            });

            // contentNotes += `<form id="note-${i}" class="note" onclick="updateForm( ${i})">
            //     <button class="note__control" type="button" onclick="removeNote(event, ${i})">
            //     <i class="fa fa-times" aria-hidden="true"></i>
            //     </button>
            //     <h1 class="note__title"> ${note.title}</h1>
            //     <p class="note__body"> ${note.content}</p>
            //     </form>`;
        }

        section.appendChild(form);
    };

    for (var i = 0; i < notesList.totalCount(); i++) {
        _loop(i);
    }
};

window.updateForm = function (id) {
    return notesList.update(id);
};

window.createNote = function (title, content, form) {
    notesList.push(title.value, content.value);
    form.reset();
};

window.updateNote = function (id, newTitle, newContent) {
    return notesList.save(id, newTitle.value, newContent.value);
};

window.removeNote = function (event, id) {
    event.stopPropagation();

    var millisecondsToWait = 500;
    setTimeout(function () {
        var item = document.getElementById('note-' + id);
        item.classList.add('animation-test');

        setTimeout(function () {
            notesList.splice(id);
        }, 300);
    }, millisecondsToWait);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _note = __webpack_require__(2);

var _note2 = _interopRequireDefault(_note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListNotes = function () {
    function ListNotes(observer) {
        _classCallCheck(this, ListNotes);

        this._internList = [];
        this._observer = observer;
    }

    _createClass(ListNotes, [{
        key: 'push',
        value: function push(title, content) {
            var note = new _note2.default(title, content);
            this._internList.push(note);
            this._observer();
        }
    }, {
        key: 'splice',
        value: function splice(id) {
            this._internList.splice(id, 1);
            this._observer();
        }
    }, {
        key: 'update',
        value: function update(id) {
            this._internList[id].editing = true;
            this._observer();
        }
    }, {
        key: 'save',
        value: function save(id, newTitle, newContent) {
            this._internList[id].title = newTitle;
            this._internList[id].content = newContent;
            this._internList[id].editing = false;
            this._observer();
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._internList[id];
        }
    }, {
        key: 'totalCount',
        value: function totalCount() {
            return this._internList.length;
        }
    }]);

    return ListNotes;
}();

exports.default = ListNotes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
    function Note(title, content) {
        _classCallCheck(this, Note);

        this._title = title;
        this._content = content;
        this._editing = false;
    }

    _createClass(Note, [{
        key: "title",
        get: function get() {
            return this._title;
        },
        set: function set(title) {

            title !== null && title.length > 5 ? this._title = title : alert("Title is not valid!");
        }
    }, {
        key: "content",
        get: function get() {
            return this._content;
        },
        set: function set(content) {
            content !== null && content.length > 5 ? this._content = content : alert("Content is not valid!");
        }
    }, {
        key: "editing",
        get: function get() {
            return this._editing;
        },
        set: function set(status) {
            this._editing = status;
        }
    }]);

    return Note;
}();

exports.default = Note;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormInput(props) {
    var input = document.createElement('input');

    input.setAttribute('class', props.class);
    input.setAttribute('type', props.type);
    input.setAttribute('name', props.name);
    input.setAttribute('placeholder', props.placeholder);
    input.setAttribute('value', props.value);

    if (props.readonly) input.setAttribute('readonly', true);

    return input;
}

// const propsInput = {
//     class: 'note__title',
//     type: 'text',
//     name: 'titulo',
//     placeholder: 'Título',
//     value:  note.title
// }

exports.default = FormInput;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormTextArea(props) {
    var textArea = document.createElement('textarea');

    textArea.setAttribute('class', props.class);
    textArea.setAttribute('name', props.name);
    textArea.setAttribute('rows', props.rows);
    textArea.setAttribute('placeholder', props.placeholder);
    // textArea.value = note.content;
    textArea.innerHTML = props.value;

    return textArea;
}

// const propsTextArea = {
//     class: 'note__body',
//     name: 'texto',
//     rows: 5,
//     placeholder: 'Criar uma nota...',
//     value:  note.content
// }

exports.default = FormTextArea;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function FormButton(props) {
    var button = document.createElement('button');

    button.setAttribute('class', props.class);
    button.setAttribute('type', props.type);
    button.addEventListener('click', props.event);

    button.innerHTML = props.children;

    return button;
}

// const propsButton = {
//     class: 'note__control',
//     type: 'button',
//     event: e => {
//         updateNote(i, inputTitle, textArea);
//         // updateNote(i, event.target.title, event.target.content);
//     }
// }

exports.default = FormButton;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function Form(props) {
    var form = document.createElement('form');

    form.setAttribute('id', props.id);
    form.setAttribute('class', props.class);
    for (var i = 0; i < props.children.length; i++) {
        form.appendChild(props.children[i]);
    }

    form.addEventListener('click', props.event);
    return form;
}

// const propsForm = {
//     class: 'notes'
// }

exports.default = Form;

/***/ })
/******/ ]);