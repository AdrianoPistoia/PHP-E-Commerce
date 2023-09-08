// ____________________________________________
// |!|______________________________________|!|
// |!|______________.PROPERTIES.____________|!|
// |_|______________________________________|_|

var body        = document.getElementsByTagName("body")[0];
var JSFolderDir = "./JS/";

// ____________________________________________
// |!|--/--/--/--/--/--/--/--/--/--/--/--/--|!|
// |!|--/--/--/--/--/.OBJECTS.--/--/--/--/--|!|
// |_|--/--/--/--/--/--/--/--/--/--/--/--/--|_|

// var blockScr    = {
//     dom: document.createElement("script"),
//     id : "block",
// }
var playerJS      = {
    dom: document.createElement("script"),
    id : "player",
}
var main      = {
    dom: document.createElement("script"),
    id : "main",
}
// window.addEventListener("keydown", function(e) {
//     if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
//         e.preventDefault();
//     }
// }, false);
// ____________________________________________
// |!|--/--/--/--.OBJECT_LIST.--/--/--/--/--|!|
var JSList      = [playerJS,main];  // main = siempre ultimo

// ____________________________________________
// |!|--/--/--/--/--/--/--/--/--/--/--/--/--|!|
// |!|--/--/--/--/-.FUNCTIONS.--/--/--/--/--|!|
// |_|--/--/--/--/--/--/--/--/--/--/--/--/--|_|
var injectScripts = () => {
    JSList.forEach(e => {
        e.dom.setAttribute("src",JSFolderDir+e.id+".js");
        body.appendChild(e.dom);        
    });
}
// ____________________________________________
// |!|--/--/--/--.INITIALIZER.--/--/--/--/--|!|
    window.addEventListener("load",injectScripts());