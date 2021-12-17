import { Formik } from "formik";
import React, { useContext } from "react";
import { View, Text, TextInput,StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import SupplierContext from "../../context/SupplierContext";
import ValidationSchema from "./SupplierValidation";

const SupplierForm = ({ navigation }) => {
  const { addedSupplier, setAddedSupplier } = useContext(SupplierContext);
  const submitForm = (values) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Number(values.id),
        companyName: values.companyName,
        contactName: values.contactName,
        contactTitle: values.contactTitle,
      }),
    };

    fetch("https://northwind.vercel.app/api/suppliers", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        alert(" Supplier added.");
        setAddedSupplier(() => addedSupplier + 1);
      });
  };

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{
        id: "",
        companyName: "",
        contactName: "",
        contactTitle: "",
      }}
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
          {errors.id && <Text style={styles.errors}>{errors.id}</Text>}
          <TextInput
            onChangeText={handleChange("companyName")}
            value={values.companyName}
            style={styles.input}

            placeholder="Company Name"
          />
          {errors.companyName && <Text style={styles.errors}>{errors.companyName}</Text>}

          <TextInput
            onChangeText={handleChange("contactName")}
            value={values.contactName}
            style={styles.input}

            placeholder="Contact Name"
          />
          {errors.contactName && <Text style={styles.errors}>{errors.contactName}</Text>}

          <TextInput
            onChangeText={handleChange("contactTitle")}
            value={values.contactTitle}
            style={styles.input}

            placeholder="Contact Title"
          />
          {errors.contactTitle && <Text style={styles.errors}>{errors.contactTitle}</Text>}

          <Button title="Add Supplier" onPress={handleSubmit}style={styles.button} />
        </View>
      )}
    </Formik>
  );
};

export default SupplierForm;

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