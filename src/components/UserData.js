import React from 'react';

import useUserFlowData from '../hooks/useUserFlowData';

export default () => {
  const { data, updateData } = useUserFlowData();
  return (
    <div>
      <span>{data && data.name}</span>
      <button onClick={() => updateData('New Name')}>Update</button>
    </div>
  )
}
