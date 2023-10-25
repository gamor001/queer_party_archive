import { combineReducers } from "redux";

const displayPoster = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_POSTERS':
      return action.payload;
    case 'UNSET_ALL_POSTERS':
      return [];
    default:
      return state;
  }
};


const viewPosterContent = (state = [], action) => {
  switch (action.type) {
    case 'VIEW_POSTER_CONTENT':
      return action.payload;
    case 'UNVIEW_POSTER_CONTENT':
      return [];
    default:
      return state;
  }
};

//combine reducers
export default combineReducers({
  displayPoster,
  viewPosterContent,
});


