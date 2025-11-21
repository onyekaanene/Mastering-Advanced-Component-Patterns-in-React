/*

3. Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component, enhancing functionality.

Example: Authentication HOC
This example creates an HOC withAuth that wraps a component and ensures only authenticated users can access it. If the user is not authenticated, it displays a login message.
*/

function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const isAuthenticated = !!localStorage.getItem('authToken');

    if (!isAuthenticated) {
      return <div>Please log in to access this page.</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;

//Usage:

function Dashboard() {
  return <h1>Welcome to the Dashboard!</h1>;
}

export default withAuth(Dashboard);

