function whatNumberIsIt(n){
    //coding here
    var num=Number(n);
    if(num==Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
    else if(num==Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
    else if (isNaN(num))return "Input number is Number.NaN";
    else if(num<Number.MIN_VALUE) return "Input number is Number.NEGATIVE_INFINITY";
    else if(num>Number.MAX_VALUE) return "Input number is Number.POSITIVE_INFINITY";
    else return "Input number is "+n;
  }