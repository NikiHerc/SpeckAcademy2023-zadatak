window.addEventListener('load', eventListeners);
function eventListeners() {
    var inputPolje = document.getElementById('inputPolje');
    var button = document.getElementById('addButton');
    var gridElemenata = document.getElementById('grid');
    button.addEventListener('click', function (event) {
        var unos = inputPolje.value;
        if(unos!=""){
        var noviElement = document.createElement("p");
        noviElement.setAttribute("class", "tehnologije");
        noviElement.innerText = unos;
        gridElemenata.appendChild(noviElement);
        inputPolje.value="";
    }else{
        event.preventDefault();
    }
    })
    var removeItems=document.getElementById('removeItems');
    removeItems.addEventListener('click',function(event){
        while (gridElemenata.childElementCount>0) {
            var firstChild = gridElemenata.firstChild;
            gridElemenata.removeChild(firstChild);
            inputPolje.value="";
        } 
    })
}