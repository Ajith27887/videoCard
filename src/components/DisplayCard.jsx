import "./DisplayCard.css";
import { FaEye } from "react-icons/fa";

function DisplayCard({ LimitData }) {
  return LimitData?.map((x) => {
    // *Destructuring Api
    const { id, title, videoUrl, views } = x;
    return (
      <div
        className="col-12 col-md-4 col-lg-2 g-2 mt-3 video_card p-0"
        key={id}
      >
        <iframe src={videoUrl} allowFullScreen></iframe>
        <div className="p-3 d-flex flex-column  align-items-center  text-center">
          <p className="fw-bolder fs-larger">{title}</p>
          <div className="badge bg-success d-flex align-items-baseline justify-content-center  w-75">
            <FaEye className="text-primary mx-2 " />
            <span className=" ">{views}</span>
          </div>
        </div>
      </div>
    );
  });
}
export default DisplayCard;
