class Xiaomi {
    constructor(weight, color, memory, Resolution, size, MAIN_CAMERA){
        this.weight = weight;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.Resolution  = Resolution;
        this.MAIN_CAMERA  = MAIN_CAMERA;

    }
}

class Iphone {
    constructor(){
        this.weight = "173 g (6.10 oz)";
        this.Announced = "2019, February 20";
        this.color = "red";
        this.memory = "64GB";
        this.size = "6.39 inches, 100.2 cm2 (~85.2% screen-to-body ratio)"
        this.Resolution  = "1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density) x 480 pixels"
        this.MAIN_CAMERA  = "48 MP"
        this.Display = "Contrast ratio: Infinite (nominal), 3.921 (sunlight)"
    }
}


class Samsung {
    constructor(){
        this.weight = "498 g (Wi-Fi), 500 g (LTE), 502 g (5G) (1.10 lb)";
        this.Announced = "2020, August 05";
        this.color = "lavander";
        this.memory = "512GB";
        this.size = "11.0 inches, 350.9 cm2 (~83.6% screen-to-body ratio)"
        this.Resolution  = "1600 x 2560 pixels, 16:10 ratio (~274 ppi density)"
        this.MAIN_CAMERA  = "13 MP"
        this.DISPLAY_Type = "TFT LCD, 120Hz, HDR10+"
    }
}

let iphone = new Iphone()
console.log(iphone)
let samsung = new Samsung()
console.log(samsung)
let xiaomi = new Xiaomi("500g", "purple", "256GB", "7.10 inches", "2000x2500 px", "16MP", )
console.log(xiaomi)
