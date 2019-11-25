const initialState = {
  username: '',
  user_id: '',
  profile_img: '',
  //!CreatePost
  postInput: '',
  postTitle: ''
}

// ACTION CONSTANTS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

// ACTION BUILDERS
export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
  }
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER_INFO:
      return {...state, ...action.payload}
    default: return state
  }
}

export default reducer