import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { NotFound } from "../components/screens/not-found/NotFound";
import { routes } from "./routes.data";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       {routes.map((route) => (
//         <Route
//           key={route.path}
//           path={route.path}
//           element={<route.component />}
//         />
//       ))}
//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
