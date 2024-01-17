const nameUser: string = "Matias ";

const adressUser: string = "Villa Celina, Blanco 173"

enum category2{ 
  technology = "Technology",
  meal = "Meal",
  clothes = "Clothes",
  several = "Several"
};

const product: {productName: string, price:number, amount:number, category: category2}[] = [
  {productName: "Notebook", price:90000, amount:1, category: category2.technology},
  {productName: "Rice", price:1500, amount:2, category: category2.meal},
  {productName: "Sneakers", price:10000, amount:1, category: category2.clothes},
  {productName: "Elastic band", price:500, amount:5, category: category2.several},
]

function showData (){
  console.log("Name: " + nameUser)
  console.log("Adress: " + adressUser)
  console.log("Shopping cart: ")
  console.log(product)
}

showData();

/*Creo 2 constantes que son el nombre y la direccion de tipo String, despues creo */