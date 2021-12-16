import { Formik } from 'formik'
import React, { useContext } from 'react'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'
import SupplierContext from '../../context/SupplierContext'


const SupplierForm = ({ navigation }) => {

    const { addedProduct, setAddedProduct } = useContext(ProductContext)
    const submitForm = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({  id: Number(values.id), companyName: values.companyName, contactName: values.contactName, contactTitle: values.contactTitle })
        }

        fetch('https://northwind.vercel.app/api/Supplier', requestOptions)
            .then((res) => res.json())
            .then(data => {
                alert('supplier added...')
            })
    }

    return (
        <Formik
            initialValues={{ id: '', companyName: '', contactName: '', contactTitle: '' }}
            onSubmit={values => submitForm(values)}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View>
                     <TextInput
                        onChangeText={handleChange('id')}
                        value={values.id}
                        placeholder='ID'
                    />

                    <TextInput
                        onChangeText={handleChange('companyName')}
                        value={values.companyName}
                        placeholder='Company Name'
                    />

                    <TextInput
                        onChangeText={handleChange('contactName')}
                        value={values.contactName}
                        placeholder='Contact Name'
                    />
                     <TextInput
                        onChangeText={handleChange('contactTitle')}
                        value={values.contactTitle}
                        placeholder='Contact Title'
                    />

                    <Button title='Add supplier..' onPress={handleSubmit}/>
                </View>
            )}
        </Formik>
    )
}



export default SupplierForm