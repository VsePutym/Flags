export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DETAILS_COUNTRY = 'SET_DETAILS_COUNTRY';
export const SET_CLEAR_DETAILS = 'SET_CLEAR_DETAILS';
export const SET_NEIGHBORS = 'SET_NEIGHBORS';

export const setLading = () => ({
    type: SET_LOADING
})

export const setClearDetails = () => ({
    type: SET_CLEAR_DETAILS
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

export const setNeighbors = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries
})

export const setDetailsCountry = (data) => ({
    type: SET_DETAILS_COUNTRY,
    payload: data
})

export const LoadingDetails = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLading)
    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setDetailsCountry(data[0])))
        .catch(error => dispatch(setError(error)))
}

export const loadNeighbors = (borders) => (dispatch, _, {client, api}) => {
    dispatch(setLading)
    client.get(api.filterByCode(borders))
        .then(({data}) => dispatch(setNeighbors(data.map((c) => c.name))))
        .catch(error => dispatch(setError(error)))
}