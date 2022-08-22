

//timer starting
        var seconds_left = 11;//make interval function
        var myTimer= setInterval(function() {//link 'btn' to --seconds_left
            document.getElementById('btn').innerHTML = --seconds_left;
        //if staement for alert 2
        if (seconds_left == 5) {
            alert2();
        }
        
            //if condition for less then 1
            if (seconds_left < 1){
                clearInterval(myTimer);// clear interval
            //if condition for 0 seconds endTime
                if(seconds_left<= 0 ||seconds_left <1){
                    endTime();
                }
            }//miliseconds
        }, 1000);
        //endtimefunction

        function endTime(){//what displays, blastoff!! @ endTime
            document.getElementById('btn').innerHTML = 'Blast off!!'
        }

        //alert2 function for warning for less than half way to launch
    function alert2(){
        document.getElementById('btn').innerHTML = ("Warning less then halfway done" + -seconds_left);


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
        