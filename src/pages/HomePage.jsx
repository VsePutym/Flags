import {useNavigate} from 'react-router-dom';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {useDispatch, useSelector} from "react-redux";
import {countriesFilters, selectAllCountries, selectInfoCountries} from "../store/Countries/countriesSelector";
import {useEffect} from "react";
import {loadCountries} from "../store/Countries/countriesAction";
import {selectorRegion, selectorSearch} from "../store/Controls/controlsSelectors";


export const HomePage = () => {
    const navigate = useNavigate();
    const search = useSelector(selectorSearch);
    const region = useSelector(selectorRegion)
    const countries = useSelector((state) => countriesFilters(state, {search, region}));
    const {status, error, qty} = useSelector(selectInfoCountries);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCountries())
    }, [qty, dispatch])


    return (
        <>
            <Controls/>
            {error === 'error' && <h2>Catch error , sorry</h2>}
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'resolve' &&
            <List>
                {countries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    };

                    return (
                        <Card
                            key={c.name}
                            onClick={() => navigate(`/country/${c.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
            }
        </>
    );
};
