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
// '100', 'white', 128, '2100x1230', 'big'
iphone.weight = '100';
iphone.color = 'red'
xiaomi = new Xiaomi(540, "yellow", 64, 11, "1764x2500 px", 9, 2005 )
xiaomi.color = "yellow"
samsung = new Samsung(488, "navy", 125, 9, "1150x1952 px", "20MP", 2016 )
console.log(iphone);
console.log(samsung);
