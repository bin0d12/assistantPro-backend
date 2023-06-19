const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerList = new Schema({
   
        Name : String,
        PolicyNumber : String,
        ValidPolicy : String,
        CustomerId : String,
        VehicleMake : String,
        VehicleRegNo : String,
        Vin : String

})

module.exports = customerListData = mongoose.model('customerListData', customerList)