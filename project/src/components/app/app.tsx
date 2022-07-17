import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Page404 from '../../pages/page404/page404';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../consts';
import {MainProps} from '../../types/types';

function App(props: MainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main cardsQuantity = {props.cardsQuantity}></Main>} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='/offer/:id' element={<Room />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
