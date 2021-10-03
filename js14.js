function colorOf(r,g,b){
    //coding here
    var rs, gs, bs
    
    if(r < 16) rs = "0" + r.toString(16);
      else  rs = r.toString(16);
    if(g < 16) gs = "0"+g.toString(16);
      else  gs = g.toString(16);
    if(b < 16) bs = "0"+b.toString(16);
      else  bs=b.toString(16);
    return "#"+rs+gs+bs;
  }
  