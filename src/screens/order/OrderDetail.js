import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'


const OrderDetail = ({ navigation, route }) => {

    const { orderItem } = route.params;

    return (


        <Card>
            <Card.Title>{orderItem.id}</Card.Title>
            <Card.Divider />
            <View style={styles.cardContent}>
            <Text>CustomerID: {orderItem?.customerId}</Text>
            <Text>Order Date: {orderItem?.orderDate}</Text>
                <Text>freight: {orderItem?.freight}</Text>
                <Text>shipName: {orderItem?.shipName}</Text>
            
                
        
            </View>
        </Card>)

}

const styles = StyleSheet.create({
    cardContent: {
        alignItems: 'center'
    }
})

export default OrderDetail