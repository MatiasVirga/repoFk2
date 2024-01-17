const person = {
    nombre: "Ana",
    edad:28,
    ciudad:"Madrid",
    idiomas: ["español", "ingles"]
};

const {nombre, edad, ciudad, idiomas} = person;
function showData(){
    console.log(nombre + " " + edad + " " + ciudad + " " , ...idiomas)
}

showData();