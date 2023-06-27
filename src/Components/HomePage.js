import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function HomePage() {
    return (
      <div className="homePage">
        <Header className={'homeHeader'} heading={'Employee Directory'}/>
        <SearchBar/>
        <EmployeeList />
      </div>
    );
  }