import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Doctor from './Containers/Doctor/Doctor';
import MiniDrawer from './Components/Layout/Layout';
import AlertDialog from './Containers/DialogBox/Dialogbox';
import { ConfigureStore } from './redux/Store';
import Counter from './Counter/Counter';
import { Provider } from 'react-redux';
import Medicine from './Containers/Medicines/Medicine';


function App() {

    const store = ConfigureStore ()

  return (

   <Provider store={store}> 
    <MiniDrawer>
      <Switch>
        <Route exact path="/medicines" component={Medicine}/>
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path={"/counter"} component = {Counter} />
        <Route exact path={"/dialog"} component = {AlertDialog} />
      </Switch>
    </MiniDrawer>
    </Provider>
    
  );
}

export default App;
