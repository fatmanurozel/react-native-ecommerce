import { Formik } from "formik";
import React from "react";
import { View, TextInput } from "react-native";
import { Button } from "react-native-elements";

const ProductForm = ({ navigation }) => {
  const submitForm = (values) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Number(values.id),
        name: values.name,
        unitPrice: Number(values.unitPrice),
        unitsInStock: Number(values.unitsInStock),
      }),
    };

    fetch("https://northwind.vercel.app/api/products", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        alert("product added..");
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
            placeholder="ID"
          />
          <TextInput
            onChangeText={handleChange("name")}
            value={values.name}
            placeholder="Name"
          />

          <TextInput
            onChangeText={handleChange("unitPrice")}
            value={values.unitPrice}
            placeholder="Unit Price"
          />

          <TextInput
            onChangeText={handleChange("unitsInStock")}
            value={values.unitsInStock}
            placeholder="Stock"
          />

          <Button title="Add Product" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ProductForm;
