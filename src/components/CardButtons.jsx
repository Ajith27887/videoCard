import Button from "react-bootstrap/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function CardButtons({ setpageRaw, pageRaw, totalPages }) {
  //* Button Handler
  const leftHandler = () => {
    setpageRaw(pageRaw - 1);
  };
  const rightHandler = () => {
    setpageRaw(pageRaw + 1);
  };
  console.log(pageRaw + 1);
  console.log(pageRaw);
  return (
    <>
      <div className=" d-flex justify-content-center mb-2">
        <Button
          className="mx-2"
          variant="primary"
          onClick={leftHandler}
          disabled={pageRaw === 0 ? true : false}
        >
          <BsChevronLeft fontSize={25} />
        </Button>
        <div className="badge badge-dark bg-dark d-flex justify-content-center   text-center p-3  mt-2">
          {pageRaw + 1} / {totalPages}
        </div>
        <Button
          className="mx-2"
          variant="primary"
          onClick={rightHandler}
          disabled={+pageRaw + 1 === +totalPages ? true : false}
        >
          <BsChevronRight fontSize={25} />
        </Button>
      </div>
    </>
  );
}

export default CardButtons;
