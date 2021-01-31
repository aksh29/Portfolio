import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import ProjectDetails from './components/ProjectCard/projectdetail';
import Contact from './components/Contact/contact';



export default class Routes extends React.Component {

  render(){
  return (
    <BrowserRouter>
      <Switch>
            <Route path='/Projects/projectdetails/' component={ProjectDetails}/>
            <Route path='/Projects' component={Projects}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
            <Route exactpath='/Home' component={Home}/>
        {/* <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        /> */}
      </Switch>
    </BrowserRouter>
  );
}
};

