import { FaVideo } from "react-icons/fa";

import { useEffect, useState } from "react";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import "bootstrap/dist/css/bootstrap.min.css";
import CardButtons from "./components/CardButtons";

function App() {
  const [FetchData, setFetchData] = useState([]);
  const [pageRaw, setpageRaw] = useState(0);
  const [LimitData, setLimitData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const api = `http://localhost:5000/results/`;

  // *API's

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, []);

  useEffect(() => {
    let limit = 10;
    let page = pageRaw * limit; //* (0 * 10), (1*10), (2*10)
    setLimitData(FetchData?.slice(page, page + limit)); //* (0,10), (10,20), (20,30)
    setTotalPages(FetchData?.length / limit); //* 30 / 10 = 3
  }, [FetchData, pageRaw]);

  // *JSX
  return (
    <>
      <h3 className="text-center mt-5">
        Video <FaVideo className="text-danger" /> Card
      </h3>
      <CardButtons
        setpageRaw={setpageRaw}
        pageRaw={pageRaw}
        totalPages={totalPages}
      />
      <div className="container mt-md-3 mt-2 mb-md-5 mb-2 p-md-2 p-5">
        <div className="row gap-4 justify-content-center position-relative">
          <DisplayCard LimitData={LimitData} />
        </div>
      </div>
      <CardButtons
        setpageRaw={setpageRaw}
        pageRaw={pageRaw}
        totalPages={totalPages}
      />
    </>
  );
}

export default App;
