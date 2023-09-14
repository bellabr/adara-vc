import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <div> <Header/> <Home/> <Footer/> </div>
    },
]);

// const Router = () => {
//     return (
//         <div>
//             <Header/>
//             <Route/>
//             {/* <Switch> */}
//                 {/* {routes.map((routeItem) => {
//                     return (
//                         <Route
//                             key={routeItem.key}
//                             exact={routeItem.exact}
//                             path={routeItem.path}
//                             component={routeItem.component}
//                         />
//                     );
//                 })} */}
//             {/* </Switch> */}
//             <Footer />
//         </div>
//     )
// }

export default Router;