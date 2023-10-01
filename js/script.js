/*------------------------ Config para acessar Json --------------------------*/

fetch('js/menu.json')
    .then(response => response.json())
    .then(jsonObj => {
        console.log(jsonObj);
        objetoEntradas(jsonObj);
    });

/*---------------------------- Função para rodar Truncate ------------------------- */

const truncateString = (string = '', maxLength = 95) =>
    string.length > maxLength
    ? `${string.substring(0, maxLength)}…`
    : string;

/*--------------------- Declaração de Var para uso do Json -------------------------*/

let entradaContainer;
let pizzaContainer;
let sobremesaContainer;
let div1;
let div2;
let tituloEntrada;
let imageEntrada;
let descEntrada;
let valorEntrada;
let tituloPizza;
let imagePizza;
let descPizza;
let valorPizza;
let tituloSobremesa;
let imageSobremesa;
let descSobremesa;
let valorSobremesa;

let containerEntrada = document.querySelector(".add");
let containerPizza = document.querySelector(".add1");
let containerSobremesa = document.querySelector(".add2");

function objetoEntradas(jsonObj) {

    /*----------------------- Entradas ------------------------*/

    jsonObj.Entradas.forEach((element,cont) => {
        
    entradaContainer = document.createElement("div");
    entradaContainer.classList.add("row");
    entradaContainer.classList.add("col-md-6" , "col-xl-4", "justify-content-center");
    entradaContainer.setAttribute("data-id", cont);
    entradaContainer.addEventListener('click', () => {
        goToproduct(cont,"Entradas");
    })

    div1 = document.createElement("div");
    div1.classList.add("col-md-6");
    
    div2 = document.createElement("div");
    div2.classList.add("col-md-6", "w-modify");

    tituloEntrada = document.createElement("h3");
    tituloEntrada.textContent = jsonObj.Entradas[cont].Titulo;

    imageEntrada = document.createElement("img");
    imageEntrada.classList.add("image");
    imageEntrada.setAttribute("src", jsonObj.Entradas[cont].imagem);
    imageEntrada.setAttribute("alt", jsonObj.Entradas[cont].Titulo);
    
    
    descEntrada = document.createElement("p");
    descEntrada.classList.add("desc");
    descEntrada.textContent = truncateString(jsonObj.Entradas[cont].Descricao);
    
    valorEntrada = document.createElement("p");
    valorEntrada.classList.add("valor");
    valorEntrada.textContent = jsonObj.Entradas[cont].Valor;
    
    
    entradaContainer.appendChild(div1);
    entradaContainer.appendChild(div2);
    div1.appendChild(imageEntrada);
    div2.appendChild(tituloEntrada);
    div2.appendChild(descEntrada);
    div2.appendChild(valorEntrada);

    containerEntrada.appendChild(entradaContainer);
    });
    

    /*----------------------- Pizzas --------------------------*/

    jsonObj.Pizzas.forEach((element, cont) => {

    pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("row");
    pizzaContainer.classList.add("col-md-6" , "col-xl-4", "justify-content-center");
    pizzaContainer.setAttribute("data-id", cont);
    pizzaContainer.addEventListener('click', () => {
        goToproduct(cont,"Pizzas");
    })

    div1 = document.createElement("div");
    div1.classList.add("col-md-6");
    
    div2 = document.createElement("div");
    div2.classList.add("col-md-6", "w-modify");

    tituloPizza = document.createElement("h3");
    tituloPizza.textContent = jsonObj.Pizzas[cont].Titulo;

    imagePizza = document.createElement("img");
    imagePizza.classList.add("image");
    imagePizza.setAttribute("src", jsonObj.Pizzas[cont].imagem);
    imagePizza.setAttribute("alt", jsonObj.Pizzas[cont].Titulo);
    
    
    descPizza = document.createElement("p");
    descPizza.classList.add("desc");
    descPizza.textContent = truncateString(jsonObj.Pizzas[cont].Descricao);
    
    valorPizza = document.createElement("p");
    valorPizza.classList.add("valor");
    valorPizza.textContent = jsonObj.Pizzas[cont].Valor;
    
    
    pizzaContainer.appendChild(div1);
    pizzaContainer.appendChild(div2);
    div1.appendChild(imagePizza);
    div2.appendChild(tituloPizza);
    div2.appendChild(descPizza);
    div2.appendChild(valorPizza);

    containerPizza.appendChild(pizzaContainer);
    });

    /*----------------------- Sobremesa ------------------------*/

    jsonObj.Sobremesas.forEach((element, cont) => {

    sobremesaContainer = document.createElement("div");
    sobremesaContainer.classList.add("row");
    sobremesaContainer.classList.add("col-md-6" , "col-xl-4", "justify-content-center");
    sobremesaContainer.setAttribute("data-id", cont);
    sobremesaContainer.addEventListener('click', () => {
        goToproduct(cont, "Sobremesas");
    })

    div1 = document.createElement("div");
    div1.classList.add("col-md-6");

    div2 = document.createElement("div");
    div2.classList.add("col-md-6", "w-modify");

    tituloSobremesa = document.createElement("h3");
    tituloSobremesa.textContent = jsonObj.Sobremesas[cont].Titulo;

    imageSobremesa = document.createElement("img");
    imageSobremesa.classList.add("image");
    imageSobremesa.setAttribute("src", jsonObj.Sobremesas[cont].imagem);
    imageSobremesa.setAttribute("alt", jsonObj.Sobremesas[cont].Titulo);


    descSobremesa = document.createElement("p");
    descSobremesa.classList.add("desc");
    descSobremesa.textContent = truncateString(jsonObj.Sobremesas[cont].Descricao);

    valorSobremesa = document.createElement("p");
    valorSobremesa.classList.add("valor");
    valorSobremesa.textContent = jsonObj.Sobremesas[cont].Valor;


    sobremesaContainer.appendChild(div1);
    sobremesaContainer.appendChild(div2);
    div1.appendChild(imageSobremesa);
    div2.appendChild(tituloSobremesa);
    div2.appendChild(descSobremesa);
    div2.appendChild(valorSobremesa);

    containerSobremesa.appendChild(sobremesaContainer);

    });

}

function goToproduct(id,tipo) {
    window.location.href = "menu.html?id=" + id + "&tipo=" + tipo;
}

