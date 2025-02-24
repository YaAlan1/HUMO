import axios from "axios"
import { getData } from "../../utils/api"

let url = "http://localhost:3001/users"

let form = document.forms.singIn

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let email = fn.get("email")
    let password = fn.get("password")

    getData(`users?email=${email}`)
        .then(res => {
            if(res.data.length > 0) {
                const user = res.data[0];
                if(password == user.password) {
                    localStorage.setItem("userId", user.id)
                    localStorage.setItem("token", user.token)
                    window.location.href = "/"                     
                } else {
                    alert("password is wrong")
                }
            } else {
                alert("Пользователь не найден!")
            }
        })
        .catch(error => {
            console.error(error);
            
        })
  
}

    let but = document.querySelector(".btn")

    but.onclick = () => {
        window.location.href = "/src/pages/sing-up/"
    }