import Home from '../pages/Home';
import DecisionTreePage from '../pages/DecisionTreePage';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/layout';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/loan-eligibility",
                element: <DecisionTreePage />
            }
        ]
    }
]);

export default Router;
