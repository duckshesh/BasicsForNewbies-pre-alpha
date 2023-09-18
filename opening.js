var openText, openTextImg;
var x,y = 0;

function opening(){
    x = width/2;
    for(var i = 0; i <= 100; i++){
        y = y + 0.1;
        openText.position.x = x;
        openText.position.y = y;
        
        if(y <= height/2){
            openText.scale = (y/24)*0.075;
        }
        else{
            openText.scale = pi/2.55;
        }
    }

}