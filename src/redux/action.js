import axios from 'axios';

export const getQuote = (author) => (dispatch) => {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes';
    const isAuthor = author ? `?author=${author}&limit=3` : '/random';
    dispatch({ type: 'LOADING_QUOTE' });
    axios.get(url+isAuthor)
    .then((res) => {
        console.log(res.data.data);
        dispatch({ type: 'GET_QUOTE', payload: res.data.data});
    })
    .catch((err) => {
        console.log(err);
    })
}