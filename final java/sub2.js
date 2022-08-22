
function Creds() {//make function Creds
    var firstName = document.getElementById("1N").value;//variable firstName
    var lastName = document.getElementById("2N").value;//variable lastName
    var fullName = firstName + " " + lastName;//variable fullName
    var digit = document.getElementById("digit").value;//variable digit

    if (fullName.length > 20 || fullName.length < 4) {//conditions for full name length
       document.getElementById("login").innerHTML = "Invalid number of characters, please re-enter!";//message to change login if invalid
        
        }
        else if (digit > 3 || digit < 0) {//conditions for digit
        document.getElementById("login").innerHTML = "Id is an ivalid number!"; //message invalid number for digit
        }
        else {// else statement make alert
            alert("Access Granted, Welcome " + fullName +"!");//alert welcome plus full name
            location.replace("crank.html"); //replace with crank.html
        }
        
    }
    function launding() {
        location.replace("launding page.html")
    } 
    function degree() {
        location.replace("Objective.html")
        }
        function Login() {
            location.replace("engine.html")
        }
        function efficiency() {
            location.replace("Efficiencywithwarning.html")
        }
        function table() {
            location.replace("TableD.html")
        }
        function convertTable() {
            location.replace("crank.html")
        }