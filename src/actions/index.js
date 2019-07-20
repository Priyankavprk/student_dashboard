export function getStudentsList () {
  return (dispatch, getState) => {
    fetch(`https://api.myjson.com/bins/1dlper`)
    .then((res) => {
      if(!res.ok) {
        throw Error(res)
      }
      return res.json()
    }).then((data)=> {
      dispatch(getDataSuccess(data))
    })
    .catch((error) => console.log('Request failed', error.message))
 }
}

function getDataSuccess(data) {
  return {
    type: 'GET_DATA_SUCCESS',
    data: Object.values(data),
  }
}
