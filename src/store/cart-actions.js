import { appActions } from "./appSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      appActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }),
    );

    const sendRequest = async () => {
      try {
        const response = await fetch(
          `https://redux-cart-ffd78-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
          },
        );

        if (!response.ok) {
          dispatch(
            appActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Sending cart data failed!",
            }),
          );
        }
        dispatch(
          appActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };
    await sendRequest();
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      appActions.showNotification({
        status: "pending",
        title: "Getting...",
        message: "Fetching cart data!",
      }),
    );

    const fetchData = async () => {
      const response = await fetch(
        `https://redux-cart-ffd78-default-rtdb.firebaseio.com/cart.json`,
      );

      if (!response.ok) {
        dispatch(
          appActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Fetching cart data failed!",
          }),
        );
      }
      const data = await response.json();

      dispatch(
        appActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data successfully!",
        }),
      );
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      console.log(error);
      dispatch(
        appActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        }),
      );
    }
  };
};
