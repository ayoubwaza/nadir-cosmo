import Login from "../pages/Login";

/* I personally have been using HOCs (higher-order component) for this.

Here is an example authentication HOC:
 */
const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const { isLoggedIn } = props;

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <Login />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  /*   if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  } */

  return Auth;
};

export default withAuth;
/* You can use this HOC for any page component. Here is an example of usage: 

const MyPage = () => (
  <> My private page</>
);

export default withAuth(MyPage); */
