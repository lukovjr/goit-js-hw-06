const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onBlur);

function onBlur (event) {
    validationInput.classList.toggle(
        'valid',
        event.currentTarget.value.trim().length === Number(validationInput.dataset.length),
      );
      
      validationInput.classList.toggle(
        'invalid',
        event.currentTarget.value.trim().length !== Number(validationInput.dataset.length),
      );
};