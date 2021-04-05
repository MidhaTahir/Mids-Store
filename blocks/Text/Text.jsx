const Text = ({ headline, description }) => {
  return (
    <div>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>{headline}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default Text
