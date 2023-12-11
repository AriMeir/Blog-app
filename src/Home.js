import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "./context/DataContext";
function Home() {
  const { searchResults, fetchError, isLoading} = useContext(DataContext);
    return (
      <>
      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {(fetchError && !isLoading) && <p className="statusMsg" style={{color : "red"}}>
        {fetchError}</p>}
      {(searchResults && !isLoading && !fetchError) && <main className="Home">
  {searchResults.length ? (
    <Feed posts={searchResults}/>
  ):
  <p style={{marginTop:"2rem"}}>
    No posts to display.</p>}
</main>
}
      </>
   
  )}
  
  export default Home;
  