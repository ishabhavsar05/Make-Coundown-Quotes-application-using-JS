
function add(){
    let inp=document.getElementById('text-1').value;
    if(inp!==""){
    let newList=document.createElement('li');
    let list=document.getElementById('list');
    newList.innerHTML=inp;
    list.appendChild(newList);
    document.getElementById('text-1').value="";
    }
    else{
        alert("please Enter some text");
    }
}
