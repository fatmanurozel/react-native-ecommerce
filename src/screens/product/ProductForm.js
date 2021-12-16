import { Formik } from "formik";
import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ProductContext from "../../context/ProductContext";

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
        alert("added product");
        setAddedProduct(() => addedProduct + 1);
      });
  };

  return (
    <Formik
      initialValues={{ id: "", name: "", unitPrice: "", unitsInStock: "" }}
      onSubmit={(values) => submitForm(values)}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("id")}
            value={values.id}
            placeholder="add ID"
          />
          <TextInput
            onChangeText={handleChange("name")}
            value={values.name}
            placeholder="add name"
          />

          <TextInput
            onChangeText={handleChange("unitPrice")}
            value={values.unitPrice}
            placeholder="add unit price"
          />

          <TextInput
            onChangeText={handleChange("unitsInStock")}
            value={values.unitsInStock}
            placeholder="add stock"
          />

          <Button title="Add Product" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default ProductForm;
