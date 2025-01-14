import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import useCurrentUser  from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import { MovieList } from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import { InfoModal } from "@/components/InfoModal";
import useInfo from "@/hooks/useInfo";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }
  
  const Home = () => {
    const { data: movies = [] } = useMovieList();
    const { data: favorites = [] } = useFavorites();
  
    const { isOpen, closeModal } = useInfo();
  
    return (
    //   <Meta title="Home">
        <>
          <InfoModal visible={isOpen} onClose={closeModal} />
          <Navbar />
          <Billboard />
          <div className="pb-40">
            <MovieList title="Trending now" data={movies} />
            <MovieList title="My List" data={favorites} />
          </div>
        </>
    //   </Meta>
    );
  };
  export default Home;