const customerSchema = require('../modal/custListTable');
const storeCustomerList = (req, res) => {
    // let data={ Name: req.body.Name,
    //     PolicyNumber: req.body.PolicyNumber,
    //     ValidPolicy: req.body.ValidPolicy,
    //     CustomerId: req.body.CustomerId,
    //     VehicleMake: req.body.VehicleMake,
    //     VehicleRegNo: req.body.VehicleRegNo,
    //     Vin: req.body.Vin}
    console.log(req.body)
    let  customerDetails;
    req.body.forEach(element => {
    customerDetails = new customerSchema(element);
    customerDetails.save();
});
  res.send({
    message: "data stored successfully"
  })
};

module.exports = {storeCustomerList}