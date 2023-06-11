import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// pages and layouts import
import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails';
import AddBlog from './AddBlog';

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})


function App() {

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/react-blog">
                <Home />
              </Route>
              <Route exact path="/blogs/add">
                <AddBlog />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
