import {useState, useCallback} from 'react'

export default function useCounter(startValue = 0): [number, () => void] {
  const [counter, setCounter] = useState(startValue)
  const onIncrementCounter = useCallback(() => {
    setCounter(currentCounter => currentCounter + 1)
  }, [])
  return [counter, onIncrementCounter]
}

