function giveMeFive(obj){
    //coding here
    var result=[];
      for (var key in obj){
      if(key.length==5) result.push(key);      
      if(obj[key].length==5) result.push(obj[key]);
    }
    return result;
  }