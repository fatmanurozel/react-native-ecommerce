import * as yup from "yup";

const ValidationSchema = yup.object().shape({
  
 
  name: yup.string().required("Name is required") ,

  id: yup.number().required("ID is required"),

  unitPrice: yup.number().required("Price is required"),

  unitsInStock: yup.number().required("Stock information is required"),
});

export default ValidationSchema;
