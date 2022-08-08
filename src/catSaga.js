import {call, put, takeEvery} from 'redux-saga/effects';
import { getCatError, getCatSuccess } from './catState';


function* fetchCatData(){
    try{
        const response = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
        const data = yield response.json();
        yield put(getCatSuccess(data));
    }catch(error){
        yield put(getCatError(error));
    }
}

function* catSaga(){
 yield takeEvery('cats/getCatsFetch', fetchCatData);   
}

export default catSaga;