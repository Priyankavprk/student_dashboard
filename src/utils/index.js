export function getStudentsList() {
  fetch('https://api.myjson.com/bins/1dlper')
  .then((response) => {
    return response
  })
  .then((response) => response.json())
  .then((items) => console.log('/////',items))
}
