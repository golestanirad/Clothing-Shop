import React from "react";
import { connect } from "react-redux";
//// project files
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";
import Button from "../custom-button/custom-button.component";

const collectionItem = ({addItem, item, item:{ imageUrl, name, price }}) => {
 
 
 
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add To Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(collectionItem);
