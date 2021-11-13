function val(){
    var num = document.getElementById("odd").value;
    if ((num%2)==0) {
     document.getElementById("val").innerHTML="even";
  } else {
     document.getElementById("val").innerHTML="odd";
  }
 }