import { IoPeople } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const PreviewTask = () => {
  return (
    <div className=" w-[70%]">
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0awA5Uw6SJE?si=ScwjmTtCfgllnV1o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h1 className="text-xl font-bold">Creating Awesome Mobile Apps</h1>
        <div className="flex items-center space-x-2 mb-2">
          <h4 className="text-gray-500">UI UX Design</h4>
          <span>|</span>
          <h6 className="text-xs text-blue-500">+Get Mentors</h6>
        </div>

        <div className="flex items-center space-x-4 mb-2">
          <div className="flex items-center space-x-2">
            <IoPeople className="text-xl" />
            <span className="text-xs">200 Students Involved</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoTimeOutline className="text-xl" />
            <span className="text-xs">1 hour</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-2 ml-1">Description</h1>
        <p className="ml-1 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          eius blanditiis a quos animi, sequi neque aperiam illum reiciendis
          harum repellat asperiores minima.
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-xl mb-4 ml-1">
          Essence Of Assessment
        </h1>
        <div className="ml-1">
          <p className="flex items-center space-x-2 mb-2">
            <span>
              <FaCheckCircle className="text-blue-700" />
            </span>
            Understanding the tools in Figma
          </p>
          <p className="flex items-center space-x-2 mb-2">
            <span>
              <FaCheckCircle className="text-blue-700" />
            </span>
            Understand the basics of making designs
          </p>
          <p className="flex items-center space-x-2 mb-2">
            <span>
              <FaCheckCircle className="text-blue-700" />
            </span>
            Designing a mobile application using figma
          </p>
          <p className="flex items-center space-x-2">
            <span>
              <FaCheckCircle className="text-blue-700" />
            </span>
            Presenting the design flow
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewTask;
