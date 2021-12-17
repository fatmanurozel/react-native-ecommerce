import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Button, Card } from "react-native-elements";

const SupplierList = ({ navigation }) => {
  const [supplierList, setSupplierList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((data) => {
        setSupplierList(data);
        setLoading(true);
      });
  }, [SupplierList]);

  return (
    <>
      {loading == false ? (
        <View style={styles.Activity}>
          <ActivityIndicator size="xxlarge" color="#285abf" />
        </View>
      ) : (
        <ScrollView>
          <View>
            <Button
              title="Add New Supplier"
              onPress={() => navigation.navigate("SupplierForm")} style={styles.addButton}
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
                </View>
                </View>
              </Card>
            ))}
        </ScrollView>
      )}
    </>
  );
};

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
  
  }
});

export default SupplierList;

