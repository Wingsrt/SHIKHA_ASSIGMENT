import Home from "./home/home";
import Login from "./login/login";
import Main from "./main/main";
import {Switch,Route} from 'react-router-dom'


function App() {
  return (

    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/main' component={Main} />
    </Switch>
  
    
 
  );
}

export default App;
