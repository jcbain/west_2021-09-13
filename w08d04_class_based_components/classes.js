class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculatesArea(){
    return this.length * this.width;
  }

}

// const rect = new Rectangle(3, 4)
// console.log(rect.calculatesArea())


class RectangularPrism extends Rectangle{
  constructor(length, width, height){
    super(length, width);
    this.height = height;
  }

  calculateVolume(){
    return this.calculatesArea() * this.height;
  }

}

const prism = new RectangularPrism(2,5,6)
console.log(prism.calculateVolume())
// const calculateVolume = prism.calculateVolume;
// calculateVolume()