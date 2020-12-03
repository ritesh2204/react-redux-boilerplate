const nameReducer = (state = [], action) => {
  if (action.type === "CHANGE_NAME") {
    return action.payload;
  }
  console.log(action);
  return state;
};

export default nameReducer;
