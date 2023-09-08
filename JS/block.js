
var intPropertyValue = (target,property) => {
    return parseInt(window.getComputedStyle(target).getPropertyValue(property));
}
function transalteBlocksToGrid( ){

    var arrBlock = [];
    let length = document.getElementsByClassName("block").length;
    for(i = 1;i<=length;i++){ arrBlock.push(document.getElementById("b"+i))}
    
     for(e = 1; e<=arrBlock.length;e++){
        
        for (ancho = 0; ancho < intPropertyValue(arrBlock[e-1],"width")/50; ancho++) {

            console.log("ancho: "+ancho+"\neleAncho: "+intPropertyValue(arrBlock[e-1],"width")/50)
            for(alto = 0; alto < intPropertyValue(arrBlock[e-1],"height")/50; alto++) {    
                console.log(gridMap)
            
                console.log("alto: "+alto+"\neleAlto: "+intPropertyValue(arrBlock[e-1],"height")/50)
            }
        }
    } 
}
$(document).ready(function(){
    function transalteBlocksToGrid( ){
        let startPos, totalHori,totalVer;
        var arrBlock = [];
        let length = document.getElementsByClassName("block").length;

        for(i = 1;i<=length;i++){ arrBlock.push(document.getElementById("b"+i))}

        for(e = 1; e<=arrBlock.length;e++){

            startPos    = (intPropertyValue(arrBlock[e-1],"left")/50)+(intPropertyValue(arrBlock[e-1],"top")/50*26);
            totalHori   = (intPropertyValue(arrBlock[e-1],"width")/50);
            totalVer    = (intPropertyValue(arrBlock[e-1],"height")/50);


            for(alto = 0; alto < totalVer; alto++) {    

                for (ancho = 0; ancho < totalHori; ancho++) {

                    gridMap[(startPos)+(totalHori-ancho)+((totalVer-alto)*26+26)] = false;
                }
            }
        } 
    }
    transalteBlocksToGrid();   
});
