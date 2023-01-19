const submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    // email
    const email = document.querySelector("#email");
    const errorEmail = document.querySelector(".error-email");

    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // validar
    if (email.value === "" || !regex.test(email.value)) {
        email.style.borderColor = "hsl(354, 100%, 66%)";
        errorEmail.classList.remove("active");
    } else {
        email.style.borderColor = "hsl(223, 100%, 88%)";
        errorEmail.classList.add("active");
        email.value = "";
    }
})