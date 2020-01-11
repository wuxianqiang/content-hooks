import React, { useState } from 'react';

const Context = React.createContext([{}, () => { }]);

const Provider = props => {
  const [state, setState] = useState({
    userFlow: {},
    otherData: {},
    aLotOfData: []
  })
  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  )
}

export {
  Context,
  Provider
}
