 const event = require('events')
 const fs = require('fs'); 
 

 class Temp extends event {
    constructor() {
      super();
      this.temp = {};
      this.tempfilePath = 'temp.json';
      this.LoadTemperatures();
    }
}

addTemperature(date, temp);{
    this.temp[date] = temp;
    this.saveTemp();
    const AveTemp = temp.reduce((acc, val) => acc + val, 0) / Temp.length;
    if (AveTemp > 30) {
      this.emit('highTemperature', {date, temp: AveTemp});
    }
  }




getAveTemp(date); {
    const tempforDate = this.temp[date];
    if (!tempforDate || tempforDate.length === 0) {
      console.log(`There is no information about the temperature on this date:${date}`);
      return;
    }
    const totalTemperature = temperaturesForDate.reduce((acc, val) => acc + val, 0);
    const AveTemp = totalTemperature / temperaturesForDate.length;
    console.log(`The average temperature on this date ${date} is: ${AveTemp} Celsium`);
}


saveTemp();{
    try {
      fs.writeFileSync(this.tempfilePath, JSON.stringify(this.temp), 'utf16');
    } catch (err) {
      console.error(err);
    }
  }



  LoadTemperatures(); {
    fs.readFile(this.tempfilePath, 'utf16', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') { // якщо файл не знайдено
          console.log(`File: ${this.temperaturesFilePath} is not found. Creating a new one...`);
          this.saveTemp(); // створюємо новий файл
          setTimeout(() => {
            this.emit('Temperatures Loaded');
          }, 1000);
          return;
        }
        console.error(err);
        return;
      }
      try {
        const LoadedTemp = JSON.parse(data);
        this.temperatures = Object.assign({}, this.temperatures, LoadedTemp);
        this.emit('Temperatures Loaded');
      } catch (e) {
        console.error(e);
      }
    });
  }




  const sensor = new TemperatureSensor();

  sensor.on('highTemperature', ({date, temperature}) => {
    console.log(`Увага! Середня температура повітря вища за 30 градусів (${temperature} градусів) на дату ${date}`);
  });
  
  sensor.on('temperaturesLoaded', () => {
    sensor.addTemperature("2023-04-24", [18, 32]);
    sensor.addTemperature("2023-04-25", [41, 15, 17, 30, 25]);
    sensor.addTemperature("2023-04-26", [22.5]);
  
    sensor.getAverageTemperature("2023-04-24");
    sensor.getAverageTemperature("2023-04-25");
    sensor.getAverageTemperature("2023-04-26");
  
    console.log(sensor.temperatures);
  });

