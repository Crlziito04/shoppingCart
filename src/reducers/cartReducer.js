
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(item => item.id === action.payload.id)


      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state)

        newCart[productInCartIndex].quantity += 1
        updateLocalStorage(newCart)

        return newCart
      }
      const newState = [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case "REMOVE_TO_CART": {
      const newState = state.filter(item => item.id === action.payload.id)
      updateLocalStorage(newState)
      return newState
    }

    case "CLEAR_CART": {
      updateLocalStorage([])
      return []
    }
  }
  return state
}