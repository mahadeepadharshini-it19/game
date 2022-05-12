var playing=false;
var score;
var action;
var timeremaining;
var correctans;

document.getElementById("startmenu").onclick=function(){
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        //show countdown box
        show("timer");
        timeremaining=60;
        document.getElementById("timing").innerHTML=timeremaining;
        //hide countdown box
        hide("gameover");

        document.getElementById("startmenu").innerHTML="Restart Game";

        countdown();
        generateQA();
    }
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==correctans){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                show("correct");
                hide("wrong");
                setInterval(function() {
                    hide("correct");
                }, 1000);
                generateQA();
            }
            
            else{
                show("wrong");
                hide("correct");
                setInterval(function() {
                    hide("wrong");
                },1000);
            }
        }
    }
}

//to stop counter
function countdown(){
    action=setInterval(function(){ 
        timeremaining-=1;
        document.getElementById("timing").innerHTML=timeremaining;
        if(timeremaining==0){
            show("gameover");
            stopcountdown();
            document.getElementById("gameover").innerHTML="<p>GAME OVER!</p><p>YOUR SCORE IS " +score + "</p>";
        hide("timer");
        hide("correct");
        hide("wrong");
        playing=false;
        document.getElementById("startmenu").innerHTML="Start Game";
        }
    }, 1000); 
    }
    function stopcountdown(){
        clearInterval(action);
    }
    function hide(Id){
        document.getElementById(Id).style.display="none";
    }
    function show(Id){
        document.getElementById(Id).style.display="block";
    }
    // to generate q and a
function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
     correctans=x*y;
     document.getElementById("question").innerHTML=x+"x"+y;
     var correctpos=1+Math.round(3*Math.random());
     document.getElementById("box"+correctpos).innerHTML=correctans; //1 box with correct ans
    
     var answers=[correctans];
     //fil other box with wrong ans
     for(i=1;i<=4;i++){
        if (i !=correctpos){
            var wrongans;
            do{
                wrongans=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
            document.getElementById("box"+i).innerHTML=wrongans;
            }while (answers.indexOf(wrongans)>-1);
            
            answers.push(wrongans);
        }
    }
 }