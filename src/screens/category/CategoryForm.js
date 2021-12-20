import { Formik } from "formik";
import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import CategoryContext from "../../context/CategoryContext";
import ValidationSchema from "./CategoryValidation";

const CategoryForm = ({ navigation }) => {
  const { addedCategory, setAddedCategory } = useContext(CategoryContext);
  const submitForm = (values) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Number(values.id),
        description: values.description,
        name: values.name,
      }),
    };

    fetch("https://northwind.vercel.app/api/categories", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        alert(" category added.");
        setAddedCategory(() => addedCategory + 1);
      });
  };

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{ id: "", description: "", name: "" }}
      onSubmit={(values) => submitForm(values)}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            onChangeText={handleChange("id")}
            value={values.id}
            placeholder=" ID"
            style={styles.text}
          />
          {errors.id && <Text>{errors.id}</Text>}
          <TextInput
            onChangeText={handleChange("name")}
            value={values.name}
            placeholder="name"
            style={styles.text}
          />
          {errors.name && <Text>{errors.name}</Text>}

          <TextInput
            onChangeText={handleChange("description")}
            value={values.description}
            placeholder="description"
            style={styles.text}
          />
          {errors.description && <Text>{errors.description}</Text>}

          <Button title="Add Category" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    height: 40,
  },
});

export default CategoryForm;
