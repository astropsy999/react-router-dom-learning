import NavBar from './components/navBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashBoard from './components/dashboard';
import Login from './components/login';
import Home from './components/home';
import NotFound from './components/not-found';
// import PostsList from './components/postsList';
// import Post from './components/post';
import Posts from './components/posts';

function App() {
  return (
    <div>
      <NavBar />
      <h1>React Router App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
