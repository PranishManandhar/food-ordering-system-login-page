let p1 = document.getElementById("pass");
let p2 = document.getElementById("cpass");

const validity = () => {
    if (pass.value !== cpass.value) {
        input.setCustomValidity("Please enter the same password");
    }
    else {
        input.setCustomValidity("");
    }
}

p1.onchange = validity;
p2.onkeyup = validity;