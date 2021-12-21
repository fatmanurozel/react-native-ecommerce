import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert, TextInput, Input } from 'react-native'
import { Button, Card } from 'react-native-elements'



const SupplierList = ({ navigation }) => {

  const [supplierList, setSupplierList] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchName, setSearchName] = useState('')
  const [nameSort, setNameSort] = useState(false)
  const [idSort, setIdSort] = useState(false)

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then(data => {
        setSupplierList(data)
        setLoading(true)
      })

  }, [])

  useEffect(() => {
    getSuppliers()
  }, [])

  const getSuppliers = () => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((res) => res.json())
      .then((data) => {
        setSupplierList(data);
      })
  }
  const deleteSupplier = (id) =>
    Alert.alert('I am deleting.. Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => {

            setLoading(false)

            const requestOptions = {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              }
            }
            fetch('https://northwind.vercel.app/api/suppliers/' + id, requestOptions)
              .then((res) => res.json())
              .then(data => {
                getSuppliers()
              })
          }
        },
        {
          text: 'No',
          onPress: () => { }
        }])
  const searchCompanyName = (companyName) => {
    companyName = companyName.toLowerCase()
    setSearchName(companyName)
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((res) => res.json())
      .then(data => {
        var filtered = data.filter(q => q.companyName.toLowerCase().includes(companyName))
        setSupplierList(filtered)
      })
  }

  const sortSupplierName = () => {
    setNameSort(!nameSort)
    if (nameSort == true) {
      let sortedSupplierName = _.orderBy(supplierList, ['companyName'], ['asc'])
      setSupplierList(sortedSupplierName)
    }
    else {
      let sortedSupplierName = _.orderBy(supplierList, ['companyName'], ['desc'])
      setSupplierList(sortedSupplierName)
    }
  }
  const sortSupplierId = () => {
    setIdSort(!idSort)
    if (idSort == true) {
      let sortedSupplierId = _.orderBy(supplierList, ['id'], ['asc'])
      setSupplierList(sortedSupplierId)
    }
    else {
      let sortedSupplierId = _.orderBy(supplierList, ['id'], ['desc'])
      setSupplierList(sortedSupplierId)
    }
  }


  return (
    <>
      {
        loading == false ? (
          <View style={styles.Activity}>
            <ActivityIndicator size="xxlarge" color="#285abf" />
          </View>
        )

          : (
            <ScrollView>
              <View>
                <Button
                  title="Add New Supplier"
                  onPress={() => navigation.navigate("SupplierForm")} style={styles.addButton}
                />
              </View>
              <View>
                <Button title='Sort by Name' onPress={() => sortSupplierName()} buttonStyle={styles.button} />
                <Button title='Sort by ID' onPress={() => sortSupplierId()} buttonStyle={styles.button} />
              </View>
              <View>
                <TextInput
                  onChangeText={(e) => searchCompanyName(e)}
                  style={styles.input}
                  placeholder='Search by name...'
                />
              </View>

              {supplierList &&
                supplierList.map((item, key) => (
                  <Card key={key}>
                    <View style={styles.card}>
                      <Card.Title style={styles.title}>{item.companyName}</Card.Title>
                      <Card.Divider />
                      <View>

                        <Button
                          title="supplier detail"
                          onPress={() =>
                            navigation.navigate("SupplierDetail", {
                              supplierItem: item,
                            })
                          } style={styles.button}
                        />

                        <Button title='X' onPress={() => deleteSupplier(item.id)} style={styles.button} />
                      </View>
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
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    height: 40,
    width: 300,
    margin: 12,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: "center",
  },
  button: {
    height: 40,
    width: 150,
    margin: 12,
    padding: 10,
    justifyContent: 'center',
    alignItems: "center",
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  addButton: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,

  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
});

export default SupplierList;

