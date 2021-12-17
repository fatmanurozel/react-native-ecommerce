import { Formik } from "formik";
import React, { useContext } from "react";
import { View, Text, TextInput ,StyleSheet} from "react-native";
import { Button } from "react-native-elements";
import ProductContext from "../../context/ProductContext";
import ValidationSchema from "./ProductValidation";
import { Ionicons } from "@expo/vector-icons";

const ProductForm = ({ navigation }) => {
  const { addedProduct, setAddedProduct } = useContext(ProductContext);
  const submitForm = (values) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        id: Number(values.id),
        unitPrice: Number(values.unitPrice),
        unitsInStock: Number(values.unitsInStock),
      }),
    };

    fetch("https://northwind.vercel.app/api/products", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        alert(" product added.");
        setAddedProduct(() => addedProduct + 1);
      });
  };

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{ id: "", unitPrice: "", name: "", unitsInStock: "" }}
      onSubmit={(values) => submitForm(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            onChangeText={handleChange("id")}
            value={values.id}
            style={styles.input}
            placeholder=" ID"
          />
          {errors.id && <Text  style={styles.errors}><Ionicons name="alert" color={"yellow"} size={35}/>{errors.id}</Text>}
          <TextInput
            onChangeText={handleChange("name")}
            value={values.name}
            style={styles.input}
            placeholder="name"
          />
          {errors.name && <Text style={styles.errors}><Ionicons name="alert" color={"yellow"}  size={35}/> {errors.name}</Text>}

          <TextInput
            onChangeText={handleChange("unitPrice")}
            value={values.unitPrice}
            style={styles.input}
            placeholder="unit price"
          />
          {errors.unitPrice && <Text style={styles.errors}><Ionicons name="alert" color={"yellow"}  size={35}/>{errors.unitPrice}</Text>}

          <TextInput
            onChangeText={handleChange("unitsInStock")}
            value={values.unitsInStock}
            style={styles.input}
            placeholder="unit in stock"
          />
          {errors.unitsInStock && <Text style={styles.errors}><Ionicons name="alert" color={"yellow"}  size={35}/>{errors.unitsInStock}</Text>}

          <Button title="Add Product" onPress={handleSubmit} style={styles.button}/>
        </View>
      )}
    </Formik>
  );
};

export default ProductForm;
const styles = StyleSheet.create({
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  errors:{
    color:'#e50606',
    fontSize: 16,
    
    
  },
  button:{
    height: 40,
    width:300,
    margin: 12,
    padding: 10,
  }
 
});