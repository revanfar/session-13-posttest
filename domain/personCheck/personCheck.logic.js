var Person = require('../person/person.logic')
  
class PersonCheck extends Person{
  constructor(...args) {
    super(...args)
    let info = {"NIK":super.getNik(),"Date of Birth":super.getBod()}
    console.log(info)
  }

  nikIsValid() {
    return (super.getNik().length === 16) ? true:false
  }

  bodFormatIsValid() {
    const lengthCheck = (super.getBod().length === 10) ? true:false
    if (lengthCheck === true) {
        let formatCheck = (super.getBod().substring(4,5) === '-' &&  super.getBod().substring(7,8) === '-') ? true:false
        if (formatCheck === true) {
            let monthCheck = (parseInt(super.getBod().substring(5,7)) <= 12) ? true:false
            if (monthCheck === true) {
                let dateCheck = (parseInt(super.getBod().substring(8,10)) <= 31) ? true:false
                return dateCheck
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

  bodIsValid() {
    if (this.bodFormatIsValid() === true && this.nikIsValid() === true) {
        let bodFormatNik = super.getBod().substring(8,10) + super.getBod().substring(5,7) + super.getBod().substring(2,4)
        let result = (bodFormatNik === super.getNik().substring(6,12)) ? {"status":true,"message":"Date of birth and NIK matched"}:{"status":false,"message":"Date of birth and NIK are not matched"}
        return result
    }
    else {
        return {"status":false,"message":"Date of birth or NIK has an invalid format"}
    }
  }

}

module.exports = PersonCheck