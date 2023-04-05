import { useEffect, useState } from 'react'

type TypewriterProps = {
  displayText: string
  timeoutValue: number
}

export function Typewriter({ displayText, timeoutValue }: TypewriterProps) {
  const [phrase, setPhrase] = useState('')

  useEffect(() => {
    let currentText = ''

    displayText.split('').forEach((char, index) => {
      setTimeout(() => {
        currentText = currentText.slice(0, -1)
        currentText += char

        if(displayText.length != index + 1) {
          currentText += '|'
        }

        setPhrase(currentText)
      }, 200 + (index * timeoutValue))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>{phrase}</>
  )
}
