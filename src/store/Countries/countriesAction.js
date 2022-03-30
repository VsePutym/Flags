export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_STATUS = 'SET_STATUS';
export const SET_ERROR = 'SET_ERROR';

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries
})

export const setStatus = () => ({
    type: SET_STATUS,
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})


export const loadCountries = () => (dispatch, _, {client, api}) => {
    dispatch(setStatus())
    client.get(api.ALL_COUNTRIES)
        .then(({data}) => dispatch(setCountries(data)))
        .catch((error) => dispatch(setError(error)))
}


