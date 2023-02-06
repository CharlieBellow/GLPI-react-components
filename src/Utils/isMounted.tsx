import {useState, useEffect} from "react"

export default function RenderCompleted () {
  const [ mounted, setMounted ] = useState( false );

  useEffect( () => {
    setMounted( true );

    return () => {
      setMounted(false)
    }
  } );

  return mounted;
}