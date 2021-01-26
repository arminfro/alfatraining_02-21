import {useEffect} from 'react'

export default function useInterval(callback: () => void) {
  useEffect(() => {
    console.log('EffectFunction useInterval')
    const intervalId = window.setInterval(callback, 1000)
    return () => {
      console.log('CleanerFunction useInterval')
      window.clearInterval(intervalId)
    }
  }, [callback])
}
