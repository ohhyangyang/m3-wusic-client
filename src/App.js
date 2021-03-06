import React, { Component } from 'react';
import './styles/css/main.css'
import { Switch } from 'react-router-dom';




import Landing from './pages/Landing';
import Private from './pages/Private';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import MusicianList from './pages/MusicianList.js'
import ProjectList from './pages/ProjectList'
import ProjectDetail from './pages/ProjectDetail'
import EditProfile from './pages/EditProfile'
import EditProject from './pages/EditProject'
import AddProject from './pages/AddProject'
import Menu from './components/Menu'
import {withAuth} from './context/auth-context'
import About from './pages/About' 





class App extends Component {
  render() {
    return (
      <div>
  
        {
          this.props.isLoggedIn?<Menu/>:null
        }
        

        <Switch>

          <AnonRoute exact path="/" component={Landing} />
          {/* Landing page中有signup和login */}

          <PrivateRoute exact path="/wusic/dashboard" component={Dashboard} />
          {/* Dashboard中有ProjectCard */}
          <PrivateRoute exact path="/wusic/musicians/:userId" component={Profile} /> 
          <PrivateRoute exact path="/wusic/musicians" component={MusicianList} />
          <PrivateRoute exact path="/wusic/projects" component={ProjectList} />
          <PrivateRoute exact path="/wusic/projects/:projectId" component={ProjectDetail} />
          <PrivateRoute exact path="/wusic/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/wusic/edit-project/:projectId" component={EditProject} />
          <PrivateRoute exact path="/wusic/add-project" component={AddProject} />
          <PrivateRoute exact path="/wusic/about" component={About} />


      

          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default withAuth(App);
