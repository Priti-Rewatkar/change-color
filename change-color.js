let newCountEl = document.getElementById("newCount")
let colorArr=["","red","green","pink","yellow","orange","gray","blue","white"]




function colourCont(){
    let randomNumber=Math.ceil(Math.random() * colorArr.length-1);
    newCountEl.style.backgroundColor= colorArr[randomNumber];

}