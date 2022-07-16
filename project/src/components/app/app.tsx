import Main from '../../pages/main/main';
import {MainProps} from '../../types/types';


function App(props: MainProps): JSX.Element {
  return (
    <Main cardsQuantity = {props.cardsQuantity}></Main>
  );
}

export default App;
