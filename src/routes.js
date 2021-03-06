import React from 'react'
import { Route } from 'react-router'
import DynamicLayout from './phenomic'
import App from './app' /* Main entry of all requests */
import Blog from './pages/Blog' /* Blog for pagination views */
import Resource from './layouts/Resource' // layout for dynamic param based route
import SubmitResource from './pages/Community/Submit'

export default (
  <Route component={App}>
    {
      [
        '/blog/page/:page',
        '/blog/category/:category',
        '/blog/category/:category/page/:page'
      ].map((path, i) => (
        <Route
          { ...{ path } }
          component={Blog}
          key={ i }
        />
      ))
    }
    <Route path='/community/resource/:id' component={Resource} />
    <Route path='/community/submit' component={SubmitResource} />
    <Route path='access_token=:token' component={App} />
    <Route path='*' component={DynamicLayout} />
  </Route>
)
