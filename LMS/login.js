	
let local=document.getElementById("sub");
local.addEventListener("click",login);

function login(){

   let userName=document.getElementById("name").value;
   let userPass=document.getElementById("passwd").value;
   let currentUser={};
   currentUser.Name=userName;
  
   

   let userdata=JSON.parse(localStorage.getItem(userName));
    console.log(userdata.Name,userdata.pass);
  
   

if(userName==userdata.Name && userPass==userdata.pass)
{   if(!userdata.isadmin==false){
    currentUser.isadmin=true;
    let strUser=JSON.stringify(currentUser);
       localStorage.setItem("currentUser",strUser);
  alert("admin login")
    window.open("admin.html");

    }    
else{
    alert("Student has login")
    userdata.isadmin=false;
    let strUser=JSON.stringify(currentUser);
       localStorage.setItem("currentUser",strUser);
      
    window.open("student.html");
   
}
}
}