import { Route, Link } from 'react-router-dom';
import Stats from './stats';
import Edit from './edit';

const DashBoard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">Редагувати</Link>
        </li>
        <li>
          <Link to="/dashboard">Профіль</Link>
        </li>
      </ul>
      <Route exact path="/dashboard/" component={Stats} />
      <Route path="/dashboard/edit" component={Edit} />
    </div>
  );
};

export default DashBoard;
