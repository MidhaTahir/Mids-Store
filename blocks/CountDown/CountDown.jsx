import Countdown from 'react-countdown'

const CountDown = ({ time, title }) => {
  return (
    <div>
      <p style={{ fontSize: '2em' }}>{title}</p>
      <Countdown date={Date.now() + time} />
    </div>
  )
}

export default CountDown
