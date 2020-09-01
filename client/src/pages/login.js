// import React, { Component, useEffect } from "react";
// import { Route, Link } from "react-router-dom";
// // components
// import Signup from "../components/SignupForm";
// import Login from "../components/LoginForm";
// import Navbar from "../components/HomeNavbar";
// import API from "../utils/API";

// //for user to login, gets user info to authenticate

// function Login(props) {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [email, setEmail] = useState(null);

//   useEffect(() => {
//     fetch("/user/info")
//       .then((res) => res.json())
//       .then((email) => setEmail(email).catch(console.log(err)));
//   }, []);

//   const updateUser = (userObject) => {
//     setState(userObject);
//   };

//   const isLoggedIn = (event) => {
//     setLoggedIn(event.target.value);
//   };

//   const getUser = () => {
//     API.getUser("/user/info").then((response) => {
//       console.log("Get user response: ");
//       console.log(response.data);
//     });
//   };

//   return (
//     <div className="Login">
//       <Navbar updateUser={email} loggedIn={isLoggedIn} />
//       {/* greet user if logged in: */}
//       {loggedIn && <p>Join the party, {email}!</p>}
//       {/* Routes to different components */}
//       <Route exact path="/" component={Home} />
//       <Route
//         path="/login"
//         render={() => <LoginForm updateUser={updateUser} />}
//       />
//       <Route path="/signup" render={() => <Signup />} />
//     </div>
//   );
// }

// export default Login;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loggedIn: false,
//       username: null,
//     };

//     this.getUser = this.getUser.bind(this);
//     this.componentDidMount = this.componentDidMount.bind(this);
//     this.updateUser = this.updateUser.bind(this);
//   }

//   componentDidMount() {
//     this.getUser();
//   }

//   updateUser(userObject) {
//     this.setState(userObject);
//   }

//   getUser() {
//     axios.get("/user/").then((response) => {
//       console.log("Get user response: ");
//       console.log(response.data);
//       if (response.data.user) {
//         console.log("Get User: There is a user saved in the server session: ");

//         this.setState({
//           loggedIn: true,
//           username: response.data.user.username,
//         });
//       } else {
//         console.log("Get user: no user");
//         this.setState({
//           loggedIn: false,
//           username: null,
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
//         {/* greet user if logged in: */}
//         {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
//         {/* Routes to different components */}
//         <Route exact path="/" component={Home} />
//         <Route
//           path="/login"
//           render={() => <LoginForm updateUser={this.updateUser} />}
//         />
//         <Route path="/signup" render={() => <Signup />} />
//       </div>
//     );
//   }
// }

// export default App;