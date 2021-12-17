import * as yup from "yup";
const ValidationSchema = yup.object().shape({
  id: yup.number().required("ID is required"),

  name: yup.string().required("Name is required"),

  description: yup.string().required("description is required"),
});

export default ValidationSchema;
