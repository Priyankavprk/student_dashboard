const initialState = {
  data: [],
  filteredData: [],
  searchItem: '',
}

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_SUCCESS' :
      return {
        ...state,
        data: action.data,
        filteredData: action.data
      }
    case 'SEARCH_RESULT' :
      return {
        ...state,
        filteredData: action.data
      }

    case 'SET_SEARCH_TEXT' :
      return {
        ...state,
        searchItem: action.text
      }

    default:
      return state;
  }
}
