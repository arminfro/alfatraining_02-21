import React, {useState, useEffect, ReactElement} from "react"

interface Props {
  startValue?: 0
}

export default function FunctionalCounter(props: Props): ReactElement {
  const [counter, setCounter] = useState(props.startValue || 0)

  useEffect(() => {
    const intervalId = window.setInterval(onIncrementCounter, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const defaultTitle = document.title
    document.title = `Counter ${counter}`
    return () => {
      document.title = defaultTitle
    }
  }, [counter])

  const onIncrementCounter = () => {
    setCounter(currentCounter => currentCounter + 1)
  }

  return(
    <div>
      <p>Counter: {counter}</p>
      <button onClick={onIncrementCounter} className="ui button">+</button>
    </div>
  )
}
