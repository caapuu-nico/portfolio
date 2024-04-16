
let menuVista = false ;

//oculta y muestra menu en responsive

const  mostrarOcultarMenu = ()=>{
    if(menuVista){
        document.getElementById("nav").classList="";
        menuVista= false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVista= true
    }
}
const seleccionar =() => {
    document.getElementById("nav").classList ="";
    menuVista= false;
}

//aplicar animaciones skills
//cuando muestra scrolling aplica animacion
const efecto = () => {

var skills = document.getElementById("skills");
var skillsDistancia = window.innerHeight - skills.getBoundingClientRect().top;
if(skillsDistancia >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("node");
    habilidades[2].classList.add("express");
    habilidades[3].classList.add("sql");
    habilidades[4].classList.add("mongodb");
    habilidades[5].classList.add("java");
    habilidades[6].classList.add("react");
    habilidades[7].classList.add("redux");
    habilidades[8].classList.add("tailwind");
    habilidades[9].classList.add("htmlycss");
//skill secundarios
    habilidades[10].classList.add("trabajoenequipo");
    habilidades[11].classList.add("comunicacion");
    habilidades[12].classList.add("logro");
    habilidades[13].classList.add("oportunidad");
    habilidades[14].classList.add("dominios");
    habilidades[15].classList.add("analitica");
    habilidades[16].classList.add("innovar");
    habilidades[17].classList.add("adaptacion");
}
}
window.onscroll = function(){
efecto()
}


// const input = document.getElementById("input");
// input.addEventListener("change", (event)=>{
//     let checked=event.target.checked;
//     document.body.classList.input("dark");
//     console.log(input)
//     // if(checked==true){

//     // }
// })


     document.getElementById("input").addEventListener("change",()=>{
        // var hasClass = Array.from(event.target.classList).indexOf('white') > -1;
        console.log(document.body.classList)
        if(document.body.className.indexOf("dark")===-1){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");
        }
    });

//  modoClaro()
    

 
