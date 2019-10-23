import React from "react";
import { connect } from "react-redux";
///project files
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const collection = ({ collection: { title, items } }) => {
  return (
    <div className='collection-page'>
      <h2 className="title">{title}</h2>
      <div className="list">
        {items.map(item => (
          <CollectionItem key={item.imageUrl} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionTitle)(state)
});

export default connect(mapStateToProps)(collection);
