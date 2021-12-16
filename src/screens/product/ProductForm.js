import { Formik } from 'formik'
import React, { useContext } from 'react'
import { View, Text, TextInput} from 'react-native'
import { Button } from 'react-native-elements'
import ProductContext from '../../context/ProductContext'
import ValidationSchema from "./ProductValidation"

const ProductForm = ({ navigation }) => {

    const { addedProduct, setAddedProduct } = useContext(ProductContext)
    const submitForm = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: values.name, id: Number(values.id), unitPrice: Number(values.unitPrice), unitsInStock: Number(values.unitsInStock) })
        }

        fetch('https://northwind.vercel.app/api/products', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert(' product added.')
                setAddedProduct(() => addedProduct + 1)
            })
    }

    return (
        <Formik
            validationSchema={ValidationSchema}
            initialValues={{ id: '', unitPrice: '', name: '', unitsInStock: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        
                        placeholder=' ID'
                    />
                    {errors.id && <Text>{errors.id}</Text>}
                    <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                    
                        placeholder='name'
                    />
                    {errors.name && <Text>{errors.name}</Text>}
                    
                    <TextInput
                        onChangeText={handleChange('unitPrice')}
                        value={values.unitPrice}
                       
                        placeholder='unit price'
                    />
                    {errors.unitPrice && <Text >{errors.unitPrice}</Text>}

                    <TextInput
                        onChangeText={handleChange('unitsInStock')}
                        value={values.unitsInStock}
                        
                        placeholder='unit in stock'
                    />
                    {errors.unitsInStock && <Text >{errors.unitsInStock}</Text>}

                    <Button title='Add Product' onPress={handleSubmit}  />
                </View>
            )}
        </Formik>
    )
}

export default ProductForm