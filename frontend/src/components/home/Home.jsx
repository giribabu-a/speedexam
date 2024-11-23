import Sidebar from "../sidebar/Sidebar";
import "./Home.css";

const domains = [
  // { name: "Testing Tools", path: "testing" },
  // { name: "Full Stack Java", path: "java" },
  // { name: "Full Stack Python", path: "python" },
  // { name: "MERN Full Stack", path: "mernstack" },
  // { name: "Data Science", path: "datascience" },
  // { name: "Scrum Master", path: "scrummaster" },
  // { name: "Business Analyst", path: "businessanalyst" }
];


function Home() {

  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10 mt-5">
            
        </div>
      </div>
    </div>
  );
};

export default Home;
