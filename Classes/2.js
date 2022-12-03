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
    constructor(weight, color, memory, Resolution, size, MAIN_CAMERA, display){
        this.weight = weight;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.Resolution  = Resolution;
        this.MAIN_CAMERA  = MAIN_CAMERA;
        this.Display = display;

    }
}


class Samsung {
    constructor(weight, announce, color, memory, Resolution, size, MAIN_CAMERA, DISPLAY_Type){
        this.weight = weight;
        this.Announced = announce;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.Resolution  = Resolution;
        this.MAIN_CAMERA  = MAIN_CAMERA;
        this.DISPLAY_Type = DISPLAY_Type

    }
}

let iphone = new Iphone("498 g (Wi-Fi), 500 g (LTE), 502 g (5G) (1.10 lb)", "2020, August 05", "lavander", "512GB","11.0 inches, 350.9 cm2 (~83.6% screen-to-body ratio)","1600 x 2560 pixels, 16:10 ratio (~274 ppi density)","13 MP","TFT LCD, 120Hz, HDR10+")
console.log(iphone)
let samsung = new Samsung("173 g (6.10 oz)", "2019, February 20","red", "64GB","6.39 inches, 100.2 cm2 (~85.2% screen-to-body ratio)","1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density) x 480 pixels","48 MP","Contrast ratio: Infinite (nominal), 3.921 (sunlight)")
console.log(samsung)
let xiaomi = new Xiaomi("500g", "purple", "256GB", "7.10 inches", "2000x2500 px", "16MP", )
console.log(xiaomi)
