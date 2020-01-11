import { useContext } from "react"
import { Context } from "../Context"

const useUserFlowData = () => {
  const [state, setState] = useContext(Context);
  const updateData = name => {
    setState(prevState => ({
      ...prevState,
      userFlow: {
        ...state.userFlow,
        name
      }
    }))
  }
  return {
    data: state.userFlow,
    updateData
  }
}

export default useUserFlowData
