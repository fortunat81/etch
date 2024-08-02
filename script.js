let etchContainer = document.querySelector("#etch-container");
etchContainer.style.border = "1px solid black";
etchContainer.style.width = "960px";
etchContainer.style.display = "flex";
etchContainer.style.flexWrap = "wrap";
etchContainer.style.margin ="0 auto";
let gridBtn = document.querySelector("#gridBtn");
gridBtn.style.margin = "20px auto";
gridBtn.style.display = "block";


etchContainer.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains("square")){
        colorSquare(e.target);
    }
    
})

gridBtn.addEventListener("click",()=>{populateEtch(getGridDimension())});

function getGridDimension(){
    let dimension = 0;
    while(dimension < 1 || dimension > 100){
        dimension = Number(prompt("Enter a number between 1 and 100 for canvas size."))
    }
    return dimension;
}
function colorSquare(square){
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    square.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    if(Number(square.style.opacity) < 1){
        square.style.opacity = Number(square.style.opacity) + 0.1;
    }
}
function populateEtch(num){
    let dimension = 960 / num;
    etchContainer.replaceChildren();
    for(i = 0; i < num * num; i++){
       let square = document.createElement("div");
       square.style.boxSizing = "border-box";
       square.style.borderCollapse = "collapse";
       square.style.height = dimension+"px";
       square.style.width = dimension+"px";
       square.style.border = "1px solid black"
       square.style.opacity = 0.1;
       square.className = "square";
       etchContainer.append(square);
    }
}