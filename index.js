/* Your Code Here */
// function one
const createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
  }
  //function two
  const createEmployeeRecords = function(array2) {
    return array2.map(function(array){
        return createEmployeeRecord(array)
    })
  }
  //function three
  const createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
  
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
  
    return this
  }
  //function four
  const createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')
  
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
  
    return this
  }
  //function five
  const hoursWorkedOnDate = function(date2){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === date2
    })
  
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === date2
    })
  
    return (outEvent.hour - inEvent.hour) / 100
  }
  //function six
  const wagesEarnedOnDate = function(date3){
    let wage = hoursWorkedOnDate.call(this, date3)
        * this.payPerHour
    return parseFloat(wage.toString())
  }
  //function seven
  const allWagesFor = function(){
    let date4 = this.timeInEvents.map(function(e){
        return e.date
    })
  
    let payable = date4.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)
  
    return payable
  }
  //function eight
  const findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(record){
    return record.firstName === firstName
  })
  }
  //function nine
  const calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, record){
        return memo + allWagesFor.call(record)
    }, 0)
  }
  
  /*
   We're giving you this function. Take a look at it, you might see some usage
   that's new and different. That's because we're avoiding a well-known, but
   sneaky bug that we'll cover in the next few lessons!
  
   As a result, the lessons for this function will pass *and* it will be available
   for you to use if you need it!
   */
  
  // const allWagesFor = function () {
  //     const eligibleDates = this.timeInEvents.map(function (e) {
  //         return e.date
  //     })
  
  //     const payable = eligibleDates.reduce(function (memo, d) {
  //         return memo + wagesEarnedOnDate.call(this, d)
  //     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
  
  //     return payable
  // }