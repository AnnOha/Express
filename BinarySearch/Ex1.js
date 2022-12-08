class Staff {
    constructor (lastName){
        this.lastName = lastName;
    }
}

class RemoteStaff extends Staff {
    constructor(lastName, schedule) { 
        super(lastName);
        this.monday = schedule.monday;
        this.tuesday = schedule.tuesday;
        this.wednesday = schedule.wednesday;
        this.thursday = schedule.thursday;
        this.friday = schedule.friday;
        this.saturday = schedule.saturday;
        this.sunday = schedule.sunday;
    }
}

const remotemanag = new RemoteStaff('Spivak', { monday: "7:00 - 16:00", tuesday: "9:00 - 17:00", wednesday: "8:00 - 10:00", thursday: "10:00 - 20:00", friday: "12:00 - 22:00", saturday: "8:00 - 18:00", sunday: "10:00 - 13:00" })

console.log(remotemanag)