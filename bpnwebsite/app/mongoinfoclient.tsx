import {model, models, Schema} from "mongoose";

const InformationSchema = new Schema({
 
  name:String,
  email:String,
  country:String,
  PhoneNumber :String,
  city:String,
  streetAddress:String,
  postalCode:String,
  
 

});

export const Information = models.Information  || model('Order', InformationSchema);

export default Information ;