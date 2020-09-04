import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';
import Header from './Header';
import StreamDelete from './StreamComponents/StreamDelete';
import StreamEdit from './StreamComponents/StreamEdit';
import StreamList from './StreamComponents/StreamList';
import StreamNew from './StreamComponents/StreamNew';
import StreamShow from './StreamComponents/StreamShow';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamNew} />
          <Route path='/streams/edit' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
}

export default App;
