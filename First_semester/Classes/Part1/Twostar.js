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
   new Iphone (weight, color, memory, Resolution, size, MAIN_CAMERA, announce);
   console.log( new Iphone(540, "yellow", 64, 11, "1764x2500 px", 9, 2005))
   new Xiaomi (weight, color, memory, Resolution, size, MAIN_CAMERA, announce);
   console.log(new Xiaomi(450, "purple", 256 , "7.10 inches", "2000x2500 px", "16MP", 2002))
   new Samsung (weight, color, memory, Resolution, size, MAIN_CAMERA, announce);
   console.log(new Samsung(488, "navy", 125, 9, "1150x1952 px", "20MP", 2016))
   

}
 console.log(creatClass())
