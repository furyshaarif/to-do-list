const vartaskname = document.getElementById('taskname');
const varbtnadd = document.getElementById('btnadd');
const vartasklist = document.getElementById('tasklist');

varbtnadd.addEventListener("click",fnaddtask);
function fnaddtask(){
    if(vartaskname.value==""){
        alert("Please enter task");
    }
    else{
    const creatediv = document.createElement('div');
    creatediv.classList.add('classcreatediv');
    
    const createul = document.createElement('ul');
    const createli = document.createElement('li');
    creatediv.appendChild(createul);
    createul.appendChild(createli);

    const createpara = document.createElement('p');
    const createbtndel = document.createElement('button');
    const paranode = document.createTextNode(vartaskname.value); //vartaskname.value
    createpara.appendChild(paranode);
    const btnnode = document.createTextNode("Delete");
    createbtndel.appendChild(btnnode);
    createli.appendChild(paranode);
    createli.appendChild(createbtndel);
    // creatediv.appendChild(createpara);
    // creatediv.appendChild(createbtndel);
    createli.classList.add('createlidynamic');
    createul.classList.add('createuldynamic');
    vartasklist.appendChild(creatediv);
    vartaskname.value = "";

    createbtndel.addEventListener("click",fndeletetask);
    function fndeletetask(){
        vartasklist.removeChild(creatediv);
    }
    }
}