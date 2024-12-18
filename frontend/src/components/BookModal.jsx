import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed w-full bg-black bg-opacity-60 top-0 left-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        {/* <h4 className="my-2text-gray-500">{items._id}</h4> */}
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1"> {book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1"> {book.author}</h2>
        </div>
        <h3>AQUI OTRO TITULO</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          suscipit explicabo vero hic eaque voluptate accusamus molestiae ipsa
          sequi maxime culpa fugiat vel soluta unde numquam dolor harum tempora,
          veniam nihil est eligendi ratione. Reiciendis error eveniet deserunt
          earum officiis vitae velit doloremque! Qui molestiae sint iste vel aut
          natus consectetur sed quo? Illum aut repellat reiciendis amet
          molestiae, ipsum quo praesentium aliquam in dolore odit sed assumenda
          illo nam, velit ratione cumque neque deserunt veritatis officiis.
          Facere libero ea aut facilis accusamus. Nulla explicabo totam
          provident atque mollitia reprehenderit facere ipsam commodi similique
          saepe, ratione natus repellendus, quisquam ducimus maxime! Facere
          
        </p>
      </div>
    </div>
  );
};

export default BookModal;
