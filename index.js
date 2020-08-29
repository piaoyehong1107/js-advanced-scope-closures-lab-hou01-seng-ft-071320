function produceDrivingRange(range)
 return function (str1, str2){
   if (parseInt(str2)-parseInt(str1) < range){
     return `within range by ${range-(parseInt(str2)-parseInt(str1))}`
     else if (parseInt(str2)-parseInt(str1) > range){
     return ` ${range-(parseInt(str2)-parseInt(str1))} blocks out of range`
   }
    
 }