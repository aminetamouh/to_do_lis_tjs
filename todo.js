var idel = document.getElementsByClassName("fa-trash");
for (var i = 0; i < idel.length; i++) {
    idel[i].addEventListener("click",deleteTask); 
}
function deleteTask(){
    var conf = confirm("are u sure????")
    if(conf){
        this.parentElement.parentElement.remove()
    }
}