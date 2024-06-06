// import { Banner, Header,Loading } from "@/components";
// import { useAuth } from "@/context/authContext";
// import React from "react";
// const Home = ()=>{
//   const {isLoading}=useAuth();
//   return (
//     <>
//     {isLoading ? (
//       <Loading />
//     ) : (
//       <>
//         <Header />
//         <Banner/>
       
//       </>
//     )}
//   </>
//   );
// }
// export default Home;







import { Banner, Header, Loading } from "@/components";
import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
         
          <Header />
          <Banner/>
        </>
      )}
    </>
  );
}

export default Home;
