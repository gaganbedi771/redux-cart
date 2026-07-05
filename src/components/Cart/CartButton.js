import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { appActions } from "../../store/appSlice";
import {useSelector} from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartVisibility = () => {
    dispatch(appActions.toggleCartVisibility());
  };

  return (
    <button className={classes.button} onClick={toggleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
