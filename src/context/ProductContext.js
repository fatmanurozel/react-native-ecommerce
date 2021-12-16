import React, { createContext, useState } from 'react'

const ProductContext = createContext(null)

export const ProductProvider = ({children}) => {

    const [addedProduct, setAddedProduct] = useState(0)
    const values = {
        addedProduct,
        setAddedProduct
    }
    return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
}

export default ProductContext