function zero(){
  return[];
}

function succ(a){
  a.push(true);
  return a;
}

function n123(){
  var a = zero();
  var i = 0;
  while(i < 123){
    a = succ(a);
    i = i + 1;
  }

  return a;

}
