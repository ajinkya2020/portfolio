import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import ContactComponent from './components/contact/ContactComponent';
import HomeComponent from './components/home/HomeComponent';
import ProjectsMainComponent from './components/projects/ProjectsMainComponent';
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
      {
        path: "projects",
        element: <ProjectsMainComponent />,
      },
      {
        path: "contact",
        element: <ContactComponent />,
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals