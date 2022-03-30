import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LoadingDetails, setClearDetails} from "../store/Details/detailsAction";
import {selectorAllDetails} from "../store/Details/detailsSelector";


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status, error, currentCountry} = useSelector(selectorAllDetails);

  useEffect(() => {
      dispatch(LoadingDetails(name));
      return () => {
          dispatch(setClearDetails())
      }
  },[name, dispatch])



  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
        {status === 'loading' && <h2>Loading...</h2>}
        {error === 'reject' && <h2>not found</h2>}
        {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
