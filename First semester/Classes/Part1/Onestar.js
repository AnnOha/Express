class Phone{
    constructor(weight, color, memory, resolution, size, MAIN_CAMERA, announce){
        this.weight = weight;
        this.color = color;
        this.memory = memory;
        this.size = size;
        this.resolution  = resolution;
        this.MAIN_CAMERA  = MAIN_CAMERA;
        this.announce = announce; 
    }

    set weight(weight) {
        this._weight = weight;
    }

    get weight() {
        return this._weight;
    }

    set color(color) {
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set memory(memory) {
        this._memory = memory;
    }

    get memory() {
        return this._memory;
    }

    set size(size) {
        this._size = size;
    }

    get size() {
        return this._size;
    }

    set resolution(resolution) {
        this._resolution = resolution;
    }

    get resolution() {
        return this._resolution;
    }

    set MAIN_CAMERA(MAIN_CAMERA) {
        this._MAIN_CAMERA = MAIN_CAMERA;
    }

    get MAIN_CAMERA() {
        return this._MAIN_CAMERA;
    }

    set announce(announce) {
        this._announce = announce;
    }

    get announce() {
        return this._announce;
    }
}

class Iphone extends Phone {
}

class Xiaomi extends Phone {
}

 class Samsung extends Phone {
}

iphone = new Iphone()
iphone.weight = '450g'
iphone.color = 'red'
iphone.memory = "256GB"
iphone.size = "7.10 inches"
iphone.resolution = "2000x2500 px"
iphone.MAIN_CAMERA = "16MP"
iphone.announce = "Year 2002"

xiaomi = new Xiaomi()
xiaomi.weight = '540g'
xiaomi.color = "yellow"
xiaomi.memory = "64GB"
xiaomi.size = "11.225 inches"
xiaomi.resolution = "1764x2500 px"
xiaomi.MAIN_CAMERA = "9MP"
xiaomi.announce = "Year 2005"

samsung = new Samsung( )
samsung.weight = '488g'
samsung.color = "navy"
samsung.memory = "128GB"
samsung.size = "9.130 inches"
samsung.resolution = "1150x1952 px"
samsung.MAIN_CAMERA = "20MP"
samsung.announce = "Year 2016"

console.log(iphone);
console.log(samsung);
console.log(xiaomi);
