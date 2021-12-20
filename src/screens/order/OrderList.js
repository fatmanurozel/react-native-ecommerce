import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Card } from 'react-native-elements'



const OrderList = ({ navigation }) => {

  const [orderList, setOrderList] = useState([])
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {

    fetch('https://northwind.vercel.app/api/orders')
      .then((res) => res.json())
      .then(data => {
        setOrderList(data)
        setLoading(true)
        
      })

  }, [orderList])

  return (
    <>
      {
        
        loading == false ? (<View style={styles.Activity}><ActivityIndicator size="xxlarge" color="#285abf" /></View>)
        :  (
           
  
          <ScrollView style={styles.container}>
            <View style={styles.addButtonContainer}><Button title='Add New Order' onPress={() => navigation.navigate('OrderForm')} buttonStyle={styles.addButton} /></View>
            {
              orderList && orderList.map((item, key) => (
                <Card key={key}>
                  <Card.Title>{item.customerId}</Card.Title>
                  <Card.Divider />
                  <View style={styles.cardContent}>
                    <Text>Freight: {item.freight}</Text>
                    <Text>Country: {item?.shipAddress?.country}</Text>
                    <Button title='Go To Detail' onPress={() => navigation.navigate('OrderDetail', { orderItem: item })}></Button>

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

export default OrderList