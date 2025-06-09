import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/users/Homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/Theme/masterLayout";
import ProfilePage from "./pages/users/ProfilePage";

const RenderUserRouter = () => {
  const UserRouter = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
      <Routes>
        {UserRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return RenderUserRouter();
};

export default RouterCustom;
