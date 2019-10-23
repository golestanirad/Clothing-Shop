import React from "react";
import {Route} from 'react-router-dom';
//// project fiels
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from '../collection/collection.component';

const shop = (props) => {

  return (
    <div>
     <Route exact path={props.match.path} component={CollectionsOverview} /> 
     <Route exact path={`${props.match.path}/:collectionTitle`} component={Collection} />
    </div>
  );
};

export default shop;
