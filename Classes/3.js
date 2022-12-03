class Phone{
    constructor(weight, color, memory, Resolution, size, MAIN_CAMERA ){
        this.weight = weight;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.Resolution  = Resolution;
        this.MAIN_CAMERA  = MAIN_CAMERA;
       
       
    }
}


class Iphone extends Phone {
}


class Xiaomi extends Phone {
}


 class Samsung extends Phone {
}


let phone = new Phone("Бренд телефону")

 let samsung = new Samsung("488g", "navy", "125GB", "9.36 inches", "1150x1952 px", "20MP", "Самсунг")
console.log(samsung)

let xiaomi = new Xiaomi("540g", "yellow", "64GB", "11.50 inches", "1764x2500 px", "9MP", )
console.log(xiaomi)

let iphone = new Iphone("500g", "purple", "256GB" , "7.10 inches", "2000x2500 px", "16MP")
console.log(iphone)
