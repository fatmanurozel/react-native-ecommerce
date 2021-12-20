import React, { createContext, useState } from 'react'


const OrderContext = createContext(null)

export const OrderProvider = ({children}) => {

    const [addedOrder, setAddedOrder] = useState(0)

    const values = {
        addedOrder,
        setAddedOrder
    }

    return <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
}

export default OrderContext