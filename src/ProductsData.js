import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CartContext from '../../store/CartContext'



const ProductsData = ({ navigation }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)


  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {


    fetch('https://northwind.vercel.app/api/products')
      .then(res => res.json())
      .then((data) => {

        setProducts(data);
        setLoading(false)
      })

  }, [])


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productItem: item })}>

      <Text style={{ padding: 6, backgroundColor: 'aqua', margin: 3 }}>{item.name}</Text>

    </TouchableOpacity>

  )


  const add = (item) => {

    setCart([...cart, item])
    alert('Ürün sepete başarıyla eklendi!!')
  }

  return (
    <>

      {
        loading == true ? (<View style={[styles.container, styles.horizontal]}><ActivityIndicator size="small" color="#0000ff" /></View>) : (<ScrollView>

          {
            products && products.map((item, key) => {
              return (
                <Card key={key}>
                  <Card.Title>{item.name} - {item.unitPrice}</Card.Title>
                  <Card.Divider />
                  <View key={key}>
                    {/* <Text>Price: {item.unitPrice}</Text>
              <Text>Stock: {item.unitsInStock}</Text> */}
                    <Button
                      title="Add to Cart"
                      type="outline"
                      onPress={() => add(item)}
                    />
                    <Card.Divider />
                    <Button
                      title="Go to Detail"
                      type="outline"
                      onPress={() => navigation.navigate('ProductDetail', { productItem: item })}
                    />
                  </View>
                </Card>
              );
            })
          }

        </ScrollView>)
      }


    </>)

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});


export default ProductsData