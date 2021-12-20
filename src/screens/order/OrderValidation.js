import * as yup from "yup";
const ValidationSchema = yup.object().shape({
    customerid: yup.string()
        .required('customerid is required'),

    orderdate: yup.number()
        .required('orderdate is required'),

    freight: yup.number()
        .required('freight is required'),

    shipname: yup.string()
        .required('shipname is required')
})

export default ValidationSchema