class Person {
    constructor(name, nik, dob) {
      this.name = name
      this.nik = nik
      this.dateOfBirth = dob
    }
    getWeekType() {
      var day = new Date(this.dateOfBirth).getDay()
      if (day > 0 && day < 6) {
        return "Weekday" 
      } else if(day === 0 || day === 6) {
        return "Weekend"      
      } else {
        return "Birth of date not valid"  
      }
    }
    getAge() {
      var dateOfBirth = Date.parse(this.dateOfBirth)
      var now = Date.now()
      var diff = now - dateOfBirth
      var diffDate = new Date(diff)
      return Math.abs(diffDate.getUTCFullYear() - 1970)
    }

    getNik() {
      return this.nik
    }

    getDob() {
      return this.dateOfBirth
    }
  }
  
  module.exports = Person;