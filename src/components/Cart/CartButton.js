import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { appActions } from "../../store/appSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleCartVisibility = () => {
    dispatch(appActions.toggleCartVisibility());
  };

  return (
    <button className={classes.button} onClick={toggleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
