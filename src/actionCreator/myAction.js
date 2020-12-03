import axios from "axios";

export const myAction = () => {
  return async (dispatch) => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        dispatch({ type: "CHANGE_NAME", payload: res.data[0].name })
      );
  };
};
