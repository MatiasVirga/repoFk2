interface IMember {
    name: string,
    age: number,
    city: string,
    language: Array<string>
  }
  
const PERSON : IMember ={
    name :"ana",
    age : 28,
    city : "Madrir",
    language : ["español", "inglés"]
};

const MY_DESTRUCTURING = ({name, age, city, language}: IMember) => {
    console.log(`Su nombre es ${name}, su edad es ${age}, su ciudad es ${city}, los idiomas:`, ...language);
};

MY_DESTRUCTURING(PERSON);