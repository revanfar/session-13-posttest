var Person = require('./domain/person/person.logic');
var PersonAge = require('./domain/personAge/personAge.logic');
var PersonCheck = require('./domain/personCheck/personCheck.logic')

var person = new Person('Revan', '3451332478230016', '1994-07-25');
if (person.getWeekType() === 'Weekday' || person.getWeekType() === 'Weekend') {
    console.log(`${person.name} lahir pada tipe minggu ${person.getWeekType()}`)
    } else {
    console.log(`Tanggal lahir ${person.name} bermasalah`)  
    }

console.log(`Saat ini berumur ${person.getAge()}`)

var age = new PersonAge('Revan', '3451332478230001', '1994-07-25');
console.log(`Merupakan seorang ${age.personByAge()} \n`)

console.log('\n==Positive Case==')
var check = new PersonCheck('Revan', '3451002507940011', '1994-07-25');
console.log(check.dobIsValid().message)

console.log('\n==Wrong date format==')
var check = new PersonCheck('Revan', '3451002507940011', '1994-0725');
console.log(check.dobIsValid().message)

console.log('\n==NIK length is not 16==')
var check = new PersonCheck('Revan', '34510025079400110', '1994-07-25');
console.log(check.dobIsValid().message)

console.log('\n==NIK and date of birth values dont match==')
var check = new PersonCheck('Revan', '3451002007930011', '1994-07-25');
console.log(check.dobIsValid().message)