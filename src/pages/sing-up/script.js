import axios from "axios"
import { generateToken } from "../../utils/token"


let url = "http://localhost:3001/users"

let form = document.forms.singUp
let isSubmitted = false;
form.onsubmit = (e) => {
    e.preventDefault()

    isSubmitted = true;
    if (!validate()) return;

    let user = {}

    let fn = new FormData(form)

    fn.forEach((value, key) => {
        user[key] = value
    })

    let token = generateToken(16)


    axios.post(url, { ...user, token })
        .then(res => {
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("token", res.data.token)
            window.location.href = "/"
        })

}


function validate(){
    const form = document.forms.singUp;
    const email = form.email;
    const name = form.surname;
    const lastname = form.lastname;
    const password = form.password;
    const errors = document.querySelectorAll(".error");

    function checkField(input, regex, errorMessage, errorIndex) {
        if (!isSubmitted) return true; 

        if (!regex.test(input.value)) {
            input.style.border = "2px solid red";
            errors[errorIndex].textContent = errorMessage;
            return false;
        } else {
            input.style.border = "1px solid #ccc";
            errors[errorIndex].textContent = "";
            return true;
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,30}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isEmailValid = checkField(email, emailRegex, "Введите корректный email.", 0);
    const isNameValid = checkField(name, nameRegex, "Имя должно содержать только буквы (2-30 символов).", 1);
    const isLastNameValid = checkField(lastname, nameRegex, "Фамилия должна содержать только буквы (2-30 символов).", 2);
    const isPasswordValid = checkField(password, passwordRegex, "Пароль: 8+ символов, заглавная буква, цифра, спецсимвол.", 3);

    return isEmailValid && isNameValid && isLastNameValid && isPasswordValid;
}

document.querySelectorAll(".inp").forEach(input => {
    input.addEventListener("input", () => {
        if (isSubmitted) validate();
    });
});
validate()

let but = document.querySelector(".b")

but.onclick = () => {
    window.location.href = "/src/pages/sing-in/"
}
