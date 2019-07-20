const initialState = {
  data: []
}

export default function list(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA_SUCCESS' : {
      return {
        ...state,
        data: action.data
      }
    }
    default:
      return state;
  }
}
