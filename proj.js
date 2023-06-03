function dropdown() {
    if (document.getElementById("navlist").className == "show"){
    document.getElementById("navlist").classList.toggle("hide");
    document.getElementById("navlist").classList.remove("show");
  }else{
    document.getElementById("navlist").classList.remove("hide");
    document.getElementById("navlist").classList.toggle("show");
    

  }}


 