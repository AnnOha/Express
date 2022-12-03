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
    calculatePrice(){
        return(`You have to pay ${(this.announce * this.memory)/2000} $ without taxes`)
    }
    calculateAge(){
        var date = new Date();
        date.setYear( date.getFullYear());
        return(`This phone is ${(date.getFullYear() - this.announce)} years old`)
    }
}


class Iphone extends Phone {
}

class Xiaomi extends Phone {
}

 class Samsung extends Phone {
}



 

let samsung = new Samsung(488, "navy", 125, 9, "1150x1952 px", "20MP", 2016 )
console.log(samsung)
console.log(samsung.calculatePrice())
console.log(samsung.calculateAge())
let xiaomi = new Xiaomi(540, "yellow", 64, 11, "1764x2500 px", 9, 2005 )
console.log(xiaomi)
console.log(xiaomi.calculatePrice())
console.log(xiaomi.calculateAge())

let iphone = new Iphone(450, "purple", 256 , "7.10 inches", "2000x2500 px", "16MP", 2002)
console.log(iphone)
console.log(iphone.calculatePrice())
console.log(iphone.calculateAge())