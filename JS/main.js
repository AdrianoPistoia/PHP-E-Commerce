var gridMap =[
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|0| en cada linea hay 25
              // | 0 || 1 || 2 | | 3 | | 4 | | 5 | | 6 | | 7 | | 8 | | 9  || 10 | | 11 || 12 || 13 || 14 || 15 || 16 | 17 || 18 || 19 || 20 || 21 || 22 || 23 || 24 || 25 || deberia llegar hasta el 25
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|0| en cada linea hay 25
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|0| en cada linea hay 25
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|0| en cada linea hay 25
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|0| en cada linea hay 25
                false,true,true,true,true,true,true,true,true,true,true,true,true,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,//|5|   124
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,//|6|   149
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,//|7|   174
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|8|   199
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|8|   199
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|8|   199
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|8|   199
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|8|   199
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|8|   199
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|13|  324
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|14|  349
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,//|15|  374
                false,false,false,false,false,false,false,false,false,false,false,false,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,//|16|  399
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|17|  424
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|18|  449
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|19|  474
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,false,true ,false,false,false,false,false,false,false,false,false,false,//|20|  499
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|21|  524
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|22|  549
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,false,true ,false,false,false,false,false,false,false,false,false,false,//|23|  574
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|24|  599
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|24|  599
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,false,true ,false,false,false,false,false,false,false,false,false,false,//|24|  599
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|26|  649
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|26|  649
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,//|26|  649
                false,false,false,false,false,false,false,false,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|27|  674
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|29|  724
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|28|  699
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|32|  799
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|33|  824
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|34|  849
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|35|  874
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|36|  899
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|37|  924
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|38|  949
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|39|  974
                false,false,false,false,false,false,false,true ,true ,true ,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|40|  999
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,//|42| 1049
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,//|43| 1074
                false,false,false,false,false,false,false,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,true ,false,//|44| 1099
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|46| 1149
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|47| 1174
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|46| 1149
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|48| 1199
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|49| 1224
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|50| 1249
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|51| 1274
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|52| 1299
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|53| 1324
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|54| 1349
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|55| 1374
                false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,//|60|
              ]; 
              
// var intPropertyValue = (target,property) => { 
//     return parseInt(window.getComputedStyle(target).getPropertyValue(property)); 
// } 
// let gameMap = document.getElementById("game"); 
 




// for(i = 0;i>=(gridCol*gridRow);i++){
    
// }
// var gridMap = new pos();














