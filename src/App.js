import {NavLink, Route, Switch} from "react-router-dom";
import Todo from "./Pages/Todo/todo";
import Logo from './Todos_Logo.svg.png'
function App() {
  return <div className={'container'}>
    <div className="row">
      <div className="col-md-2">
        <NavLink to={'/todos'} ><button className={'btn btn-info mt-2'}>Todos</button></NavLink>
      </div>
      <div className="col-md-10  mt-2">
        <img style={{width:200, height:200,marginLeft:250 }} src={Logo} alt="Logo"/>
      </div>
      <div className="col-md-8 mt-2">
        <h4>Личные TODO.</h4>
        <p>В этом разделе каждый сотрудник может создать себе напоминание о том что необходимо сделать. Сотрудник с правами «Менеджер» и выше – может поставить задачу другому сотруднику.</p>
      </div>

    </div>
    <br/>
    <hr/>
    <Switch >
      <Route path={'/todos'} component={Todo}/>
    </Switch>

  </div>
}

export default App
