/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from "react-router-dom"
import Menu from "../components/Menu";
import WebCam from "react-webcam"
import {useRef} from "react";
// @ts-ignore
const QRead = (): JSX.Element => {
	const navigate = useNavigate();
	const webcamRef = useRef<WebCam>(null);
	// @ts-ignore

	return (
    <div>
      <Menu />
      <div className="flex flex-col items-center h-screen w-full justify-center">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-2">
          Read the QR
        </h3>
        {/* @ts-ignore */}
         <WebCam height={600} width={600} ref={webcamRef} />
        <button
          className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
          onClick={() => {navigate("/prescription")}}
        >
          Advance
        </button>
      </div>
    </div>
  );
}

export default QRead


