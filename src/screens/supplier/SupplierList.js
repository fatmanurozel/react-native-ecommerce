import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Alert, TextInput, Input } from 'react-native'
import { Button, Card } from 'react-native-elements'



const SupplierList = ({ navigation }) => {

    const [supplierList, setSupplierList] = useState([])
    const [loading, setloading] = useState(false)
    const [searchName, setSearchName] = useState('')
    const [nameSortToggle, setNameSortToggle] = useState(false)
    const [idSortToggle, setIdSortToggle] = useState(false)

    useEffect(() => {
        setSupplier();
    }, [])

    const setSupplier = () => {
        fetch('https://northwind.vercel.app/api/suppliers')
            .then((res) => res.json())
            .then(data => {
                setSupplierList(data)
                setloading(true)
            })
    }

    const deleteSupplier = (id) =>
        Alert.alert('I am deleting.. Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: () => {

                        setloading(false)

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
                                setSupplier()
                            })
                    }
                },
                {
                    text: 'No',
                    onPress: () => { }
                }])
    const searchByName = (companyName) => {
      companyName = companyName.toLowerCase()
        setSearchName(companyName)
        fetch('https://northwind.vercel.app/api/suppliers')
            .then((res) => res.json())
            .then(data => {
                var filteredsuppliersByName = data.filter(q => q.companyName.toLowerCase().includes(companyName))
                setSupplierList(filteredsuppliersByName)
            })
    }

    const sortSupplierName = () => {
        setNameSortToggle(!nameSortToggle)
        if (nameSortToggle == true) {
            let sortedsuppliersByName = _.orderBy(supplierList, ['companyName'], ['asc'])
            setSupplierList(sortedsuppliersByName)
        }
        else {
            let sortedsuppliersByName = _.orderBy(supplierList, ['companyName'], ['desc'])
            setSupplierList(sortedsuppliersByName)
        }
    }
    const sortId = () => {
        setIdSortToggle(!idSortToggle)
        if (idSortToggle == true) {
            let sortedSupplierById = _.orderBy(supplierList, ['id'], ['asc'])
            setSupplierList(sortedSupplierById)
        }
        else {
            let sortedSupplierById = _.orderBy(supplierList, ['id'], ['desc'])
            setSupplierList(sortedSupplierById)
        }
    }


    return (
        <>
            {
                loading == false ? (<View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>)

                    : (
                        <ScrollView style={styles.container}>
                            <View style={styles.addButtonContainer}>
                                <Button title='Add New supplier' onPress={() => navigation.navigate('NewsupplierForm')} buttonStyle={styles.addButton} />
                            </View>
                            <View style={styles.sortContainer}>
                                <Button title='Sort by Name' onPress={() => sortSupplierName()} buttonStyle={styles.button} />
                                <Button title='Sort by ID' onPress={() => sortId()} buttonStyle={styles.button} />
                            </View>
                            <View style={styles.searchContainer}>
                                <TextInput
                                    onChangeText={(e) => searchByName(e)}
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
                    }style={styles.button}
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
    justifyContent: 'center',
    alignItems: "center",
  },
  card:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  addButton:{
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
  
  },
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
});

export default SupplierList;

