import React from "react";
////project fiels
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const collectionPreview = props => {
  const renderItems = () => {
    const fourFisrtItems = props.items.filter((item, idx) => idx < 4);
    return fourFisrtItems.map(item => (
      <CollectionItem key={item.id} item={item} />
    ));
  };

  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">{renderItems()}</div>
    </div>
  );
};

export default collectionPreview;
