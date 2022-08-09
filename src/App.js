import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCatsFetch} from './redux/cat/catState';


function App() {
const {data} = useSelector(state => state.cats);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCatsFetch());
} , [dispatch]);

console.log(data);

return (
    <div className='App'>
     <h1>CAT SPECIES GALLERY</h1>
     <p>Images of different species of cats. Lots of cats for your viewing pleasure.</p>
     <hr/>
      <div className='gallery'>
        {data.map(cat => (
          <div key={cat.id} className='row'>
          <div className='column column-left'>
            <img src={cat && cat.image && cat.image.url} alt={cat.name} width="200" height={"200"}/>
          </div>
          <div className='column column-right'>
            <h3>{cat.name}</h3>
            <h5>{cat.temperament}</h5>
            <p>{cat.description}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default App;
