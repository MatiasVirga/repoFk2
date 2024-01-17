interface figura {
    name : string;
    calculateArea() : number;
  };
  
  interface circle extends figura {
    radio: number;
  }
  
  const pi: number = 3.14;
  const circle: circle = {
    name: "Circle",
    radio: 5,
    calculateArea() {
      return (pi * this.radio) * this.radio;
    }
  };
  console.log(circle.name + " " + circle.calculateArea())
  
  interface rectangle extends figura {
    weight: number;
    height: number;
  }
  
  const rectangle: rectangle = {
    name: "Rectangle",
    weight: 5,
    height:10,
    calculateArea() {
      return this.weight * this.height;
    }
  };
  console.log(rectangle.name + " " + rectangle.calculateArea())