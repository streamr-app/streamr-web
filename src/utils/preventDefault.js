export default function (callback) {
  return (event) => {
    event.preventDefault()
    callback(event)
  }
}
