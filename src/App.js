import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCatsFetch} from './catState';


function App() {
const data = useSelector(state => state.cats);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCatsFetch());
} , [dispatch]);

console.log(data);

return (
    <div>
     
    </div>
  );
}

export default App;
