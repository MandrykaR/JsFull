const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');

const logTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style = "color: ${color}; margin-left:8px "; >${text}</span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');


const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

let handlersEnabled = true;

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);




const attachEventHandlers = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);
    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
    handlersEnabled = true;
};


const removeEventHandlers = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);
    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);
    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
    handlersEnabled = false;
};

clearBtn.addEventListener('click', () => {
    eventsListElem.innerHTML = '';
})

removeBtn.addEventListener('click', removeEventHandlers);

attachBtn.addEventListener('click', attachEventHandlers);