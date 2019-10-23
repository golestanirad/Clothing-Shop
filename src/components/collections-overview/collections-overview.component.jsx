import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
/// project files

import { selectCollections } from "../../redux/shop/shop.selectors";
import  CollectionPreview  from "../collection-preview/collection-preview.component";

const collectionsOverview = ({ collections }) => {
  return (
    <div>
      {Object.values(collections).map(({ id,  ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}  
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(collectionsOverview);
