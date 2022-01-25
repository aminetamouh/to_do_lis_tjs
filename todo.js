/* ---------------------------------- Ajouter  ---------------------------------- */
//Ajouter un ecouteur sur add 
document.getElementById("btnadd").addEventListener("click",add)
//fonction appélé par ecouteur de add
function add(){
    var task = document.getElementById("ctn").textContent.trim()
   if(task!=""){
    document.getElementById("ulg").innerHTML+='<li class="list-group-item"><span>'+task+'</span><div class="icons"><i class="fas fa-trash" onclick="deleteTask()" title="delete"></i><i class="fas fa-user-edit" title="edit"></i></div></li>'
    document.getElementById("ctn").textContent=""
    }else{
        alert("Task not avalaible")
    }
}

/* ---------------------------------- Supprimer  ---------------------------------- */

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

/* ---------------------------------- Modifier icon  ---------------------------------- */

var vars = document.getElementsByClassName("fa-user-edit");
for (var i = 0; i < vars.length; i++) {
    vars[i].addEventListener("click",editTaskeco); 
}
function editTaskeco(){
    this.parentElement.parentElement.children[0].dblclick();
    this.parentElement.parentElement.children[0].click();
}

/* ---------------------------------- Modifier clique  ---------------------------------- */

var list = document.getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
    list[i].children[0].addEventListener("dblclick",editTask); 
}
function editTask(){
    if(this.getAttribute("contenteditable")===null){
        this.setAttribute("contenteditable","")
        console.log("non")
    }else{
        this.click()
        console.log("oui")
    }
}

/* ---------------------------------- Chercher tache  ---------------------------------- */

document.getElementById("search").addEventListener("keyup",chercher)
function chercher(){
    var cle = this.value
    for(var i = 0; i < list.length; i++) {
        if(!list[i].children[0].textContent.trim().toUpperCase().includes(cle.toUpperCase())){
            list[i].style.display="none"
        }else{
            list[i].style.display="block"
        }
        
    }
}

