import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from './layout/Layout'



const App =()=>{
  const isLoggedIn=false;
  // const {isLoggedIn}=useAppContext();
  return (
   <Router>
   <Routes>
    <Route path="/" element={<Layout>k</Layout>}/>
   <Route
    path="/search" element={<Layout>k</Layout>}/>
        <Route
          path="/detail/:hotelId"
          element={
            <Layout>
              k
              {/* <Detail /> */}
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              k
              {/* <Register /> */}
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>sign in
              {/* <SignIn /> */}
            </Layout>
          }
        />{isLoggedIn && (
          <>
            <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  k
                  {/* <Booking /> */}
                </Layout>
              }
            />

            <Route
              path="/add-hotel"
              element={
                <Layout>k
                  {/* <AddHotel /> */}
                </Layout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>k
                  {/* <EditHotel /> */}
                </Layout>
              }
            />
            <Route
              path="/my-hotels"
              element={
                <Layout>k
                  {/* <MyHotels /> */}
                </Layout>
              }
            />
            <Route
              path="/my-bookings"
              element={
                <Layout>k
                  {/* <MyBookings /> */}
                </Layout>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
   </Routes>
   </Router>
  );
}

export default App
