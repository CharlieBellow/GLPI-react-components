import {useRouter} from 'next/router'

interface navigateProps {
  url: string
  as?: string
}

export default function Navigate(props: navigateProps ) {
  const router = useRouter()

  return router.push(props.url, props.as)
}