//1,2,3 завдання
class Itcompany{
    constructor(name, lastname, phonenum, occupation, education, hired, fired){
        this.name = name;
        this.lastname = lastname;
        this.phonenum = phonenum;
        this.occupation = occupation;
        this.education = education;
        this.hired = hired;
        this.fired = fired;
    }
    get occupation() {
        return this._occupation;
    }

    set occupation(occupation) {
    this._occupation = occupation
        if (occupation = ["IT technician", "Support specialist", "QA", "Web developer","Systems analyst","Network engineer","Software engineer", "UX", "UI","COO","CTO","CEO"].includes(occupation)){
            console.log(`Your occupation: ${this.occupation} has been found`)
     }else {
        console.log(`Your occupation is NOT in the database`)
     }
    }
 //одна зірочка
    set hired(hired){
        this._hired = hired
        var date = new Date();
        date.setYear( date.getFullYear())
        if (hired > date.getFullYear()){
            console.log (`You can not be hired in ${this._hired}. Please enter the correct Year of Employment${String.fromCodePoint(0x1F612)}`)
        }else{ 
            console.log (`You were hired ${this._hired} `)
        }

    }
//дві зірочки
    set fired(fired){
        this._fired = fired
        if(fired > this._hired){
            console.log(`AND NOW YOU'RE FIRED ${String.fromCodePoint(0x1F921)}`)
        }else{
            console.log(`You can not be fired in ${this._fired}. Please enter the correct Year of Dissmisial${String.fromCodePoint(0x1F612)}`  )
        }
    }
}
 //три зірочки
class Remote {
    constructor (lastname){
        this.lastname = lastname;
    }
}
class RemoteWork extends Remote{
    constructor(lastname, monday, tuesday, wednesday, thursday, friday) { 
        super(lastname);
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
    }
}

let RemoteS = new RemoteWork('Dannan', `"5:00 - 12:00" ${String.fromCodePoint(0x1F607)}`, ` "12:00 - 19:00"${String.fromCodePoint(0x1F60A)}`,  `"19:00 - 02:00" ${String.fromCodePoint(0x1F610)}`, `"02:00 - 10:00" ${String.fromCodePoint(0x1F612)}`, `"10:00 - 17:00" ${String.fromCodePoint(0x1F617)}`)
console.log(RemoteS)

itcompany = new Itcompany("Rowan", "Whitethorn", "+1354697785", "Web developer", "Terrassen University", 2021, 2024)
console.log(itcompany)





