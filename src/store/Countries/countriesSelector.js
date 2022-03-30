export const selectInfoCountries = (state) => ({
    status: state.countries.status,
    qty: state.countries.list.length,
    error: state.countries.error
})

export const selectAllCountries = (state) => state.countries.list;
export const countriesFilters = (state, {search = '', region= ""}) => {
    return state.countries.list.filter(country => country.name.toLowerCase().includes(search) &&
        country.region.includes(region))
}