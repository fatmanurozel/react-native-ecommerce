import { Formik } from 'formik'
import React, { useContext } from 'react'
import { View, Text, TextInput} from 'react-native'
import { Button } from 'react-native-elements'
import OrderContext from '../../context/OrderContext'
import ValidationSchema from "./OrderValidation"


const OrderForm = ({ navigation }) => {

    const { addedOrder, setAddedOrder } = useContext(OrderContext);
    const submitForm = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ customerid: values.customerid,  orderdate: Number(values.orderdate), freight: Number(values.freight),shipname: values.shipname })
        }

        fetch('https://northwind.vercel.app/api/orders', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert(' order added.');
                setAddedOrder(() => addedOrder + 1);
            });
    };

    return (
        <Formik
            validationSchema={ValidationSchema}
            initialValues={{ customerid: "", orderdate: "", freight: "", shipname: "" }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('customerid')}
                        value={values.customerid}
                        
                        placeholder=' customerid'
                    />
                    {errors.customerid && <Text>{errors.customerid}</Text>}
                    <TextInput
                        onChangeText={handleChange('orderdate')}
                        value={values.orderdate}
                    
                        placeholder='orderdate'
                    />
                    {errors.orderdate && <Text>{errors.orderdate}</Text>}
                    
                    <TextInput
                        onChangeText={handleChange('freight')}
                        value={values.freight}
                       
                        placeholder='freight'
                    />
                    {errors.freight && <Text >{errors.freight}</Text>}

                    <TextInput
                        onChangeText={handleChange('shipname')}
                        value={values.shipname}
                        
                        placeholder='shipname'
                    />
                    {errors.shipname && <Text >{errors.shipname}</Text>}

                    <Button title='Add Product' onPress={handleSubmit}  />
                </View>
            )}
        </Formik>
    )
}

export default OrderForm