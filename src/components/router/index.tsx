import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import { Button } from 'antd';

/**
 * this example is for react-router
 */
export default function RouterPage() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topic</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <AtuhRoute path="/topics">
            <Topics />
          </AtuhRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  const match = useRouteMatch();
  if (match === null) {
    return <></>;
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  const { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

/**
 * 登录页面
 */
function LoginPage() {
  const history = useHistory();
  const location = useLocation();

  // 从location中取出上一页，如果没有则跳至首页
  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => fakeAuth.login(() => history.replace(from));
  return (
    <div>
      <p>you must login to view page at {from.pathname}</p>
      <Button onClick={login}>login</Button>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  login: (cb?: Function) => {
    setTimeout(() => {
      fakeAuth.isAuthenticated = true;
      cb && cb();
    });
  },
  loginout: (cb: Function) => {
    setTimeout(() => {
      fakeAuth.isAuthenticated = false;
      cb && cb();
    });
  },
};

function AuthButton() {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => fakeAuth.login(() => history.replace(from));

  return fakeAuth.isAuthenticated ? (
    <p>
      welcome
      <Button
        onClick={() => {
          fakeAuth.loginout(() => history.push('/'));
        }}
      >
        sign out
      </Button>
    </p>
  ) : (
    <p>
      need login first<Button onClick={login}>login</Button>
    </p>
  );
}

function AtuhRoute(props: RouteProps) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }
    />
  );
}
