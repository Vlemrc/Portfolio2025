import { useCallback } from "react"

export default function useNavClickSound() {
  const play = useCallback(() => {
    const audio = new Audio("/poolballsound.mp3")
    audio.volume = 0.5
    audio.play()
  }, [])
  return play
}
