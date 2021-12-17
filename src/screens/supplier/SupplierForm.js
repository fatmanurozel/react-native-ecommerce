import { Formik } from "formik";
import React, { useContext } from "react";
import { View, Text, TextInput } from "react-native";
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
            placeholder=" ID"
          />
          {errors.id && <Text>{errors.id}</Text>}
          <TextInput
            onChangeText={handleChange("companyName")}
            value={values.companyName}
            placeholder="Company Name"
          />
          {errors.companyName && <Text>{errors.companyName}</Text>}

          <TextInput
            onChangeText={handleChange("contactName")}
            value={values.contactName}
            placeholder="Contact Name"
          />
          {errors.contactName && <Text>{errors.contactName}</Text>}

          <TextInput
            onChangeText={handleChange("contactTitle")}
            value={values.contactTitle}
            placeholder="Contact Title"
          />
          {errors.contactTitle && <Text>{errors.contactTitle}</Text>}

          <Button title="Add Supplier" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SupplierForm;
