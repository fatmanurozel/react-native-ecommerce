import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'


const ProductDetail = ({ navigation, route }) => {

    const { productItem } = route.params;

    return (


        <Card>
            <Card.Title>{productItem.name}</Card.Title>
            <Card.Divider />
            <View style={styles.cardContent}>
                <Text>ID: {productItem?.id}</Text>
                <Text>Stock: {productItem?.unitsInStock}</Text>
                <Text>Price: {productItem?.unitPrice}</Text>
         <Text>Quantity Per Unit: {productItem?.quantityPerUnit}</Text>
            </View>
        </Card>)

}

const styles = StyleSheet.create({
    cardContent: {
        alignItems: 'center'
    }
})

export default ProductDetail