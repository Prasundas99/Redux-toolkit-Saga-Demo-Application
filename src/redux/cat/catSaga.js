import {takeEvery} from 'redux-saga/effects';
import { fetchCatData } from './api';


function* catSaga(){
 yield takeEvery('cats/getCatsFetch', fetchCatData);   
}

export default catSaga;