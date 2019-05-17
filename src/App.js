import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom"
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)

const App = () => (
  <Router>
    <div>
        <NavBar />
        {
          routes.map((routes) => (
            <Route  key={routes.key}
                    exact={routes.exact}
                    path={routes.path}
                    component={routes.component}
            />
          ))
        }
        {/* <Route exact path="/" component={Index} />
        <Route path="/calculate" component={CalApp} /> */}
        {/* <Route path="/TodoList" component={TodoList} /> */}
    </div>
  </Router>
)

export default App