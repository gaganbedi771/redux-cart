import Cart from "./components/Cart/Cart";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "./store/appSlice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cartIsVisible = useSelector((state) => state.app.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.app.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        appActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        }),
      );
      try {
        const response = await fetch(
          `https://redux-cart-ffd78-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
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

    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCartData();
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
