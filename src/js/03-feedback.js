import throttle from 'lodash.throttle';

const formFedbackEl = document.querySelector(".feedback-form");
const formEmailEl = document.querySelector(".email");
const formTextareaEl = document.querySelector(".message");


formFedbackEl.addEventListener("submit", submitUserForm)
formFedbackEl.addEventListener("input", throttle(inputFeedbackForm, 500));


saveDataUser();


const dataForm = {};


function submitUserForm(event) {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};



function inputFeedbackForm(event) {

    dataForm[event.target.name] = event.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm))
};



function saveDataUser() {
    const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (saveData) {

            formEmailEl.value = saveData.email || "";
            formTextareaEl.value = saveData.message || "";
    }
};

