import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Ads from "./pages/Ads/Ads";
import SignUp from "./pages/Signup/SignUp";
import Login from "./pages/Login/Login";
import NotFound from "./pages/404/NotFound";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import About from "./pages/about/About";
import AdsDetails from "./pages/adsDetails/AdsDetails";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ArchivePosts from "./pages/archivePosts/ArchivePosts";
import CourseCat from "./pages/courseCat/CourseCat";
import CourseSub from "./pages/courseSub/CourseSub";
import CourseChild from "./pages/courseChild/CourseChild";
import CourseChildList from "./pages/courseChildList/CourseChildList";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Profile from "./pages/profile/Profile";
import ProtectedLogin from "./components/ProtectedRoutes/ProtectedLogIn/ProtectedLogin";
import ProtectedProfile from "./components/ProtectedRoutes/ProtectedProfile/ProtectedProfile";
import ProtectedSignUp from "./components/ProtectedRoutes/ProtectedSignUp/ProtectedSignUp";
import Basket from "./pages/basket/Basket";
import ProtectedBasket from "./components/ProtectedRoutes/ProtectedBasket/ProtectedBasket";
import Orders from "./pages/orders/Orders";

function App() {
  return (
    <Provider store={store}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ads" element={<Ads />} />
          <Route
            path="/sign-up"
            element={
              <ProtectedSignUp>
                <SignUp />
              </ProtectedSignUp>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedLogin>
                <Login />
              </ProtectedLogin>
            }
          />
          <Route path="/blog/details/:slug" element={<BlogDetails />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/post/:slug" element={<AdsDetails />} />
          <Route path="/ads-list" element={<ArchivePosts />} />
          <Route path="/ads-list/:slug" element={<ArchivePosts />} />
          <Route path="/course" element={<CourseCat />} />
          <Route path="/course/:slug" element={<CourseSub />} />
          <Route path="/sub/list/:slug" element={<CourseChild />} />
          <Route path="/child/list/:slug" element={<CourseChildList />} />
          <Route path="/child/list/:slug/:slug" element={<CourseDetails />} />
          <Route path="/course/details/:slug" element={<CourseDetails />} />
          <Route
            path="/profile/my-orders"
            element={
              <ProtectedProfile>
                <Orders />
              </ProtectedProfile>
            }
          />
          <Route
            path="/profile/my-profile"
            element={
              <ProtectedProfile>
                <Profile />
              </ProtectedProfile>
            }
          />
          <Route
            path="/profile/basket"
            element={
              <ProtectedBasket>
                <Basket />
              </ProtectedBasket>
            }
          />
        </Routes>
      </ScrollToTop>
    </Provider>
  );
}

export default App;
