var Person = require('../person/person.logic')
  
class PersonCheck extends Person{
  constructor(...args) {
    super(...args)
    let info = {"NIK":super.getNik(),"Date of Birth":super.getDob()}
    console.log(info)
  }

  nikIsValid() {
    return (super.getNik().length === 16) ? true:false
  }

  dobFormatIsValid() {
    const lengthCheck = (super.getDob().length === 10) ? true:false
    if (lengthCheck === true) {
        let formatCheck = (super.getDob().substring(4,5) === '-' &&  super.getDob().substring(7,8) === '-') ? true:false
        if (formatCheck === true) {
            let monthCheck = (parseInt(super.getDob().substring(5,7)) <= 12) ? true:false
            if (monthCheck === true) {
                let dateCheck = (parseInt(super.getDob().substring(8,10)) <= 31) ? true:false
                return dateCheck
            }
            else {
              return false
            }
        }
        else {
            return false
        }
    }
    else {
        return false
    }
  }

  dobIsValid() {
    if (this.dobFormatIsValid() === true && this.nikIsValid() === true) {
        let dobFormatNik = super.getDob().substring(8,10) + super.getDob().substring(5,7) + super.getDob().substring(2,4)
        let result = (dobFormatNik === super.getNik().substring(6,12)) ? {"status":true,"message":"Date of birth and NIK matched"}:{"status":false,"message":"Date of birth and NIK are not matched"}
        return result
    }
    else {
        return {"status":false,"message":"Date of birth or NIK has an invalid format"}
    }
  }

}

module.exports = PersonCheck