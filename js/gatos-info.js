const GATOS_URL = "https://antoniodiverso.github.io/jsonGatos/gatitos.json";


var minCount = undefined;
var maxCount = undefined;
var buscar = undefined;


function Filter(criteria, array) {
    let result = [];
    if (criteria === "Asc") {
        result = array.sort(function (a, b) {
            if (a.edad < b.edad) { return -1; }
            if (a.edad > b.edad) { return 1; }
            return 0;
        });
    } else if (criteria === "Desc") {
        result = array.sort(function (a, b) {
            if (a.edad > b.edad) { return -1; }
            if (a.edad < b.edad) { return 1; }
            return 0;
        });
    } else if (criteria === "relevancia") {
        result = array.sort(function (a, b) {
            if (a.edad > b.edad) { return -1; }
            if (a.edad < b.edad) { return 1; }
            return 0;
        });
    }

    return result;
}

function cargarGatos(array) {
    let tabla = document.getElementById("gatos");
    let cargar = "";
    
    for (let i = 0; i < array.length; i++) {
        let j = i + 1;
        if (((minCount == undefined) || (minCount != undefined && parseInt(array[i].edad) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(array[i].edad) <= maxCount))) {
               
                    
                            cargar+=`<br>
                            <div class="tabla`+ k +`">
                                <img class = "Imagn" src="` + array[i].imgSrc + `"> <br>
                                <div class="NOMBRE"> ` + array[i].nombre + `<br></div> 
                
                                <div class="desc">` + array[i].descripcion + `</div>
                                <div class="precio"> ` + array[i].edad + `</div>
                                <div class="cant"> Cantidad vendida: ` + array[i].castrado + `</div>
                                <button id="`+ j +`" class="btn btn-dark btn-see-more">Adoptar</button>
                            </div>`

                   
                    };
            tabla.innerHTML = cargar;

        }
    };
};
function sortAndShowCats(criteria, array) {

    currentArray = sortProducts(criteria, array);

    cargarGatos(currentArray);
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(GATOS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            cargarDatos(productsArray)
            document.getElementById("sortAsc").addEventListener("click", function () {
                sortAndShowProducts("Asc", productsArray)
            })
            document.getElementById("sortDesc").addEventListener("click", function () {
                sortAndShowProducts("Desc", productsArray)
            })
            document.getElementById("sortByCount").addEventListener("click", function () {
                sortAndShowProducts("relevancia", productsArray)
            })
            document.getElementById("rangeFilterCount").addEventListener("click", function () {

                minCount = document.getElementById("rangeFilterCountMin").value;
                maxCount = document.getElementById("rangeFilterCountMax").value;
                
                if ((minCount < 0 || minCount == "")) {
                    minCount = undefined;
                }

                if ((maxCount < 0 || maxCount == "")) {
                    maxCount = undefined;
                }

                cargarDatos(productsArray);
            });
            document.getElementById("clearRangeFilter").addEventListener("click", function(){
                document.getElementById("rangeFilterCountMin").value = "";
                document.getElementById("rangeFilterCountMax").value = "";
        
                minCount = undefined;
                maxCount = undefined;
        
                cargarGatos(productsArray);
            });
           
        };

    });

});