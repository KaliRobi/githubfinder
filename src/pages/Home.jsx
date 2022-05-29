import UserResults from "../compnents/users/UserResults";
import UserSearch from "../compnents/users/UserSearch";

function Home() {
    return (
        <div> 
            <UserSearch />
           <UserResults />
        </div>
    )
}

export default Home;