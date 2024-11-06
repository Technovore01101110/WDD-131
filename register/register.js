import * as templates from "./templates.mjs";
let numParticipants = 1;


function addParticipant() {
	let field = document.querySelector('#add');
    numParticipants += 1;
	let form =	templates.participantTemplate(numParticipants);
	field.insertAdjacentHTML('beforebegin', form);

}

 function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    let feeValues = feeElements.map(element => Number(element.value));
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    feeValues = feeValues.reduce((currentValue, num) => currentValue + num);
    // once you have your total make sure to return it!
    return feeValues;
    }

function submitForm(event) {
    event.preventDefault();
    // do the rest of the stuff
    const summary = document.querySelector('#summary');
    const fee = totalFees();
    const info = {
        name: document.querySelector('#adult_name').value, 
        num: numParticipants, 
        dollars: fee
    };
    const html = templates.successTemplate(info);
    const form = document.querySelector('#form');
    form.classList.add('hide');
    summary.innerHTML = html;
}

document.querySelector('#add').addEventListener('click', addParticipant);
document.querySelector('#submitButton').addEventListener('click', submitForm);