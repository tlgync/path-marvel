import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Content } from './views/Content';
import { charactersSelector, getAllCharacters } from './slices/Characters';
import { useAppDispatch } from './store';
import { Detail } from './views/Detail';

function App() {
  const dispatch = useAppDispatch();
  const { limit, hasErrors } = useSelector(charactersSelector);
  useEffect(() => {
    if (!hasErrors) {
      dispatch(getAllCharacters(limit));
    }
  }, [limit]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Content />} />
          <Route path="/detail/:id" component={withRouter(Detail)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
