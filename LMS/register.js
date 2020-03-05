let local=document.getElementById("su");
local.addEventListener("click",register);

function register(){
    let isadmin=false;
   let userName=document.getElementById("name").value;
    let userpass=document.getElementById("passwd").value;
    let usercpass=document.getElementById("cpasswd").value;
   let radio=document.getElementById("ad");


    if(userpass!=usercpass){
        alert("pass not match")
    }
    else{
        if(radio.checked){
    isadmin=true;
        }

let user={};
user.Name=userName;
user.pass=userpass;

user.isadmin=isadmin;

console.log(user);
let strUser=JSON.stringify(user);
localStorage.setItem(userName,strUser);
}
}