function produceDrivingRange(range)
 return function (str1, str2){
   if (parseInt(str2)-parseInt(str1) < range){
     return `within range by ${range-}`
   }
    
 }