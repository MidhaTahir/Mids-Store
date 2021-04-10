import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const CountDown = dynamic(async () => {
  return (await import('./CountDown')).default
})

Builder.registerComponent(CountDown, {
  name: 'CountDown',
  inputs: [
    {
      name: 'time',
      type: 'number',
      defaultValue: 'Time in milliseconds.',
    },
    {
      name: 'title',
      type: 'string',
    },
  ],
})
