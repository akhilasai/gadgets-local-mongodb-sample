import React from 'react'
import { useParams } from 'react-router-dom';

import GadgetDetails from './GadgetDetails';

function GadgetDetailsWrapper(props) {
  /* Write Your Code Below */
  const params = useParams();

  return (
    <div >
      <GadgetDetails id={params.id} url={props.url}/>
    </div>
  )
}



export default GadgetDetailsWrapper
