class Phone{
    constructor(weight, color, memory, Resolution, size, MAIN_CAMERA, announce ){
        this.weight = weight;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.Resolution  = Resolution;
        this.MAIN_CAMERA  = MAIN_CAMERA;
        this.announce = announce; 
       
       
    }
}


class Iphone extends Phone {
    calculateAge(){
        return(`This phone is ${Math.floor((this.memory*16)/this.weight)} years old`)
    }
}



class Xiaomi extends Phone {
    calculatePower(){
        return(`Xiaomi phones all have power of ${Math.floor((this.MAIN_CAMERA*15)/5)} W`)
    }

 }



 class Samsung extends Phone {
    calculatePrice(){
        return(`You price is ${Math.floor((this.announce * this.Resolution)/55)} $`)
 }
 }



 

let phone = new Phone("Бренд телефону")

let samsung = new Samsung(488, "navy", "125GB", 9, "1150x1952 px", "20MP", 2016 )
console.log(samsung.calculatePrice())
console.log(samsung)

let xiaomi = new Xiaomi(540, "yellow", "64GB", 11, "1764x2500 px", 9, 2005 )
console.log(xiaomi.calculatePower())
console.log(xiaomi)

let iphone = new Iphone(450, "purple", 256 , "7.10 inches", "2000x2500 px", "16MP", 2002)
console.log(iphone.calculateAge())
console.log(iphone)
