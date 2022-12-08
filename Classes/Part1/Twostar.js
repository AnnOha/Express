function creatClass(weight, color, memory, Resolution, size, MAIN_CAMERA, announce){
    class Phone {
        constructor(weight, color, memory, Resolution, size, MAIN_CAMERA, announce){
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
    }
   
    class Xiaomi extends Phone {
    }
  
    class Samsung extends Phone {
    }
    return new Iphone (weight, color, memory, Resolution, size, MAIN_CAMERA, announce);
   
}
console.log(creatClass(540, "yellow", 64, 11, "1764x2500 px", 9, 2005))