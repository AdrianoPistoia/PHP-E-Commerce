// √ 	─
let playerDom = datachocument.getElementById("player");

const _Directionals = ["ArrowLeft","ArrowUp","ArrowRight","ArrowDown","KeyA","KeyW","KeyD","KeyS"];
function getGridPosition (target){
   return (intPropertyValue(target,"left")/50) + (intPropertyValue(target,"top")/50*26)+27;
}
var rawPropertyValue = (target,property) => {
    return window.getComputedStyle(target).getPropertyValue(property);
}
var intPropertyValue = (target,property) => {
    return parseInt(window.getComputedStyle(target).getPropertyValue(property));
}

var player = {
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|______________PROPERTIES______________|!|
    // |_|______________________________________|_|

    domPlayerElement : playerDom,
    plWidth      : intPropertyValue(playerDom,"width"),
    plHeight     : intPropertyValue(playerDom,"height"),
    leftValue    : intPropertyValue(playerDom,"left"),
    topValue     : intPropertyValue(playerDom,"top"),
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|______________FUNCTIONS_______________|!|
    // |_|______________________________________|_|

    getPosPlayer(){ return (this.leftValue/50) + (this.topValue/50*26)+27;},

    updatePlayerValues : function() {
        player.leftValue   = intPropertyValue(this.domPlayerElement,"left");
        player.topValue    = intPropertyValue(player.domPlayerElement,"top");
    },
    checkStep : function(moveVal){
        let trueMoveVal = this.getPosPlayer() + moveVal;
        return gridMap[trueMoveVal];
    },
    followPlayer : function (val){
        let playerScreenPosY = player.topValue + player.plHeight;
        if(playerScreenPosY>=300 && playerScreenPosY <= (2800-300)){
            scrollBy(0,val);                                            //if the player body is at the middle of the screen or further, then follow him down
        }
    },
    movementCase : function(keyCode){
        let move = "";
        switch(keyCode){
            case "ArrowLeft":
            case "KeyA":        // LEFT    || 97 o 37
                move = player.leftValue - player.plWidth;//+"px";
                player.domPlayerElement.style.left = this.checkStep(-1) ? move+"px":player.leftValue+"px";
                break;
            case "ArrowUp":
            case "KeyW":        // UP      || 119 o 38
                move = player.topValue - player.plHeight;//+"px";
                if(this.checkStep(-26)){
                    player.domPlayerElement.style.top = move+"px";
                    this.followPlayer(-this.plHeight);
                }
                break;
            case "ArrowRight":
            case "KeyD":        // RIGHT   || 100 o ,39
                move = player.leftValue + player.plWidth;//+"px";
                player.domPlayerElement.style.left = this.checkStep(1) ? move+"px":player.leftValue+"px";
                break;
            case "ArrowDown":
            case "KeyS":        // DOWN    || 115 ,40
                move = player.topValue + player.plHeight;//+"px";
                if(this.checkStep(26)){
                    player.domPlayerElement.style.top = move+"px";
                    this.followPlayer(this.plHeight)
                }
                
            break;           
            default: console.log("D E F A U L T ");  
        }
    },
    
    
    // ____________________________________________
    // |!|______________________________________|!|
    // |!|_______FUNCIONES_PRINCIPALES__________|!|
    // |_|______________________________________|_|
    movePlayer : function(keyCode){
        let movetKCList = _Directionals;
        if(movetKCList.includes(keyCode)){
            this.movementCase(keyCode);
            player.updatePlayerValues(); //actualiza los valores "top" y "left" dispuestos en el CSS para la seccion de #player
        }
    },
    playerMovement : () => {
        var keyPressed = this.event.which; //Global this para agarrar el evento del llamado en html
        console.log(event.code)
        player.movePlayer(keyPressed);
    }
}

document.addEventListener("keydown",function(event){
    console.log(event.code)
    player.movePlayer(event.code);
})
