import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';

const appRouter = createBrowserRouter([{
  path: "/",
  element : <Body/>,
  children: [
    {
      path:"/",
      element: <MainContainer />
    }
  ]

}])

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
