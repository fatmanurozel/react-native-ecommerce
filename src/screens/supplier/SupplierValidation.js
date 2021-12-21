import * as yup from "yup";


const ValidationSchema = yup.object().shape({
  id: yup.number().required("ID is required"),
  companyName: yup.string().required("Name is required"),

  contactName: yup.string().required("contact name is required"),

  contactTitle: yup.string().required("contact title is required"),
});
export default ValidationSchema;
