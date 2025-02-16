import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import { Suspense } from "react";
import Loading from "../components/Loading";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="my-10">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default RootLayout;
