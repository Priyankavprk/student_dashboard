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

export function getFilteredData (value) {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SEARCH_TEXT',
      text: value.searchItem
    })
    if (value.searchItem.trim() === '') {
      dispatch(searchResult(getState().students.data))
    } else {
    let result = getState().students.data.filter((data) => {
        if (data.name.toLowerCase().startsWith(value.searchItem.toLowerCase())) {
        return data
      }
      })
      dispatch(searchResult(result))
    }
  }
}

export function getStudentDetail (id) {
  return (dispatch, getState) => {
 //    fetch(`http://localhost:5050/${id}`)
 //    .then((res) => {
 //      if(!res.ok) {
 //        throw Error(res)
 //      }
 //      return res.json()
 //    }).then((data)=> {
 //      dispatch(getDataSuccess(data))
 //    })
 //    .catch((error) => console.log('Request failed', error.message))
    let selectValue = getState().students.data.filter((student) => {
      console.log('mmmmmm',student.rollNo == id)
    })
    // console.log('........',selectValue[0])
    dispatch({
      type: 'SET_SELECTED_STUDENT',
      data: selectValue[0]
    })
    // console.log('......d.d.d.d.d.d.',id,getState().students.data,getState().students.data.filter((student) => student.rollNo == id))

  }
}

function getDataSuccess(data) {
  return {
    type: 'GET_DATA_SUCCESS',
    data: Object.values(data),
  }
}

function searchResult(result) {
  return {
    type: 'SEARCH_RESULT',
    data: result,
  }
}
