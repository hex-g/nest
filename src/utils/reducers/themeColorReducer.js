
export default (state, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      localStorage.setItem('favoriteTheme', action.payload)
      return { ...state, colorTheme: action.payload }
    default:
      return state
  }
}
