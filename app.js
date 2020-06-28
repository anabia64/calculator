function number(num){
   var show= document.getElementById("show");
   show.value += num
}
function clrbtn(){
    var show= document.getElementById("show");
    show.value ="";

}
function result(){
    var show=document.getElementById("show");
    show.value=eval(show.value)
}