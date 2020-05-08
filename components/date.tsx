import { parseISO, format } from 'date-fns'
import { ReactElement } from 'react'

type DateProps = {
  dateString: string
}
export default function Date({ dateString }: DateProps): ReactElement {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
