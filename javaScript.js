window.addEventListener('load', eventListeners);
var items = [];
function eventListeners() {
    var inputPolje = document.getElementById('inputPolje');
    var button = document.getElementById('addButton');
    var gridElemenata = document.getElementById('grid');
    var removeItems = document.getElementById('removeItems');
    button.addEventListener('click', function (event) {
        var unos = inputPolje.value;
        if (unos != "") {
            items=items.map(function(x){
                return x.toUpperCase();
            })
            if (items.includes(unos.toUpperCase()) ) {
                alert("Već ste unjeli ovu tehnologiju!")
            } else {
                items.push(unos);
                DodajElement();
            }
        } else {
            event.preventDefault();
        }
    })
    var removeItems = document.getElementById('removeItems');
    removeItems.addEventListener('click', function (event) {
        while (gridElemenata.childElementCount > 0) {
            ObrisiElement();
        }
    })
    inputPolje.addEventListener('keypress', function (event) {
        var unos = inputPolje.value;
        if (event.key == "Enter") {
            if (unos != "") {
                items=items.map(function(x){
                    return x.toUpperCase();
                })
                if (items.includes(unos)) {
                    alert("Već ste unjeli ovu tehnologiju!")
                } else {
                    items.push(unos);
                    DodajElement();
                }
            } else {
                event.preventDefault();
            }
        }
    })
    function DodajElement() {
        var unos = inputPolje.value;
        var noviElement = document.createElement("p");
        noviElement.setAttribute("class", "tehnologije");
        noviElement.setAttribute("id", "unos_" + unos)
        noviElement.innerText = unos;
        gridElemenata.appendChild(noviElement);
        inputPolje.value = "";
        removeItems.style.visibility = "visible";
    }
    function ObrisiElement() {
        var firstChild = gridElemenata.firstChild;
        gridElemenata.removeChild(firstChild);
        inputPolje.value = "";
        removeItems.style.visibility = "hidden";
        items = []
    }
}
