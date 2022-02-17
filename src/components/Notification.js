const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const deleteStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const putStyle = {
    color: 'yellow',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const postStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  let messageStyle;

  if (message.toLowerCase().includes('remove')) {
    messageStyle = deleteStyle
  }

  if (message.toLowerCase().includes('update')) {
    messageStyle = putStyle
  }

  if (message.toLowerCase().includes('add')) {
    messageStyle = postStyle
  }

  return (
    <div style={messageStyle}>
      {message}
    </div>
  )
}

export default Notification