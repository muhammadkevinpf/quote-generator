const initialState = {
  quote: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_QUOTE":
      return {
        ...state,
        quote: action.payload,
        loading: false,
      };
    case "LOADING_QUOTE":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
