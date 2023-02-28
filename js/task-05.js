const refs = {
    inpunEl: document.querySelector("#name-input"),
    outpunEl: document.querySelector("#name-output"),
};

refs.inpunEl.addEventListener("input", onInputChange);

function onInputChange(event) {
refs.outpunEl.textContent = event.target.value.trim();

if(refs.outpunEl.textContent.length === 0) {
    refs.outpunEl.textContent = "Anonymous";
};
};