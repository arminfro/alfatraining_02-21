import React, {ReactElement} from "react"

import useCounter from './hooks/useCoutner'
import useInterval from './hooks/useInterval'
import useDocumentTitle from './hooks/useDocumentTitle'

interface Props {
  startValue?: 0
}

export default function FunctionalCounter(props: Props): ReactElement {
  const [counter, onIncrementCounter] = useCounter(props.startValue)
  useInterval(onIncrementCounter)
  useDocumentTitle(`Counter ${counter}`)

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={onIncrementCounter} className="ui button">+</button>
    </div>
  )
}
