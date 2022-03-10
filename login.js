let usernames = [{
    usercode: "chandu",
    password: "loginpage"
},{
    usercode: "rakesh",
    password: "loginpage"
},
{
    usercode: "abhilash",
    password: "loginpage"
}
]
function myFunction(){
    var usernames=document.forms["myForm"]["Uname"].value;
    var password = document.forms["myForm"]["Pass"].value;
    if(usernames=="chandu" && password=="loginpage"){
        window.location.href="welcome.html"
    }
    else if (usernames=="rakesh" && password=="loginpage"){
        window.location.href="welcome.html"
    }
    else if (usernames=="abhilash" && password=="loginpage"){
        window.location.href="welcome.html"
    }
    else {
        alert("Invalid Username or Password")
    }
}