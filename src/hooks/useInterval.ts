import {useEffect} from 'react'

export default function useInterval(callback: () => void, duration = 1000): void {
  useEffect(() => {
    console.log('EffectFunction useInterval')
    const intervalId = window.setInterval(callback, duration)
    return () => {
      console.log('CleanerFunction useInterval')
      window.clearInterval(intervalId)
    }
  }, [callback, duration])
}
