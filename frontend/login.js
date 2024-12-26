import { baseUrl } from "./baseUrl.js";

let form = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;


    fetch(`${baseUrl}`);
    .then((res)=>res.json())
    .then((data)=>{
        let user= data.filter((el,i)=>el.email == email.value);
        if(user[0].email == "empher@gmail.com"){
            
        }
        if(user[0].password == "empher@123"){
            alert("Login Success");
            localStorage.setItem("loginData", JSON.stringify(user[0]))
            window.location.href="quiz.html"
        }else{
            alert("Check you Email or Password")
        }
    })
    .catch((err)=>{
        console.log("error:", err.message);
        alert("something went wrong, check your email or password");
    });
    
});