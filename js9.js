function padIt(str,n){
    var i=1;
    do{
      if(i%2!=0) str="*"+str;
      else str=str+"*"
      i++;
    }while (i<=n)
    return str;
  }