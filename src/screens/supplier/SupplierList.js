import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Card } from 'react-native-elements'



const SupplierList = ({ navigation }) => {

    const [supplierList, setSupplierList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then((res) => res.json())
            .then(data => {
                setSupplierList(data)
                setLoading(true)
            })

    }, [SupplierList])

    return (
        <>
            {
                loading == false ? (<View style={styles.Activity}><ActivityIndicator size="xxlarge" color="#285abf" /></View>)

                    : (
                        <ScrollView>
                            <View ><Button title='Add New Supplier' onPress={() => navigation.navigate('SupplierForm')} /></View>

                            {

                                supplierList && supplierList.map((item, key) => (
                                    <Card key={key}>
                                        <Card.Title>{item.companyName}</Card.Title>
                                        <Card.Divider />
                                        <View>
                                            <Text>Contact Name: {item.contactName}</Text>
                                            <Text>Contact Title: {item.contactTitle}</Text>
                                            <Button title='Go To Detail' onPress={() => navigation.navigate('SupplierDetail', { supplierItem: item })} />
                                        </View>
                                    </Card>))
                            }
                        </ScrollView>
                    )
            }
        </>
        
    )
}
 
const styles = StyleSheet.create({
   
    Activity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SupplierList