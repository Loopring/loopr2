import React from 'react';
import {Breadcrumb} from 'antd';
import Components from '../components';
import Common from '../../common';
import Containers from '../../../modules/transactions/containers';

function Empty(props){
  return <div style={{height:props.height}}></div>
}
function Page(props){
  const filters = {
    ringHash:null
  }
  const containerProps={
    ...props,
    filters
  }
  return (
    <div className="">
      <Containers.StandList {...containerProps}>
          <Components.ListActionsBar  />
          <Components.ListTable />
          <Common.ListPagination className="" />
      </Containers.StandList>
    </div>
  )
}

export default Page


