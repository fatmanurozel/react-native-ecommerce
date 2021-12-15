import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Card } from 'react-native-elements'



const ProductList = ({ navigation }) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products/')
            .then((res) => res.json())
            .then(data => {
                setProductList(data)
                setLoading(true)
            })

    }, [productList])

    return (
        <>
            {
                loading == false ? (<View style={styles.Activity}><ActivityIndicator size="xxlarge" color="#285abf" /></View>)

                    : (
                        <ScrollView style={styles.container}>
                            <View><Button title='Add New Product' onPress={() => navigation.navigate('ProductForm')} /></View>

                            {

                                productList && productList.map((item, key) => (
                                    <Card key={key}>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Divider />
                                        <View >
                                            <Text>Price: {item.unitPrice}</Text>
                                            <Text>Stock: {item.unitsInStock}</Text>
                                            <Button title='Go To Detail' onPress={() => navigation.navigate('ProductDetail', { productItem: item })} />
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


export default ProductList