/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import WebCam from "react-webcam"

const FaceID = () => {
	const navigate = useNavigate();
	const webcamRef = useRef<WebCam>(null);
	// @ts-ignore
	const [image, setImage] = useState(null);
	const capturePhoto = useCallback(() => {
	// @ts-ignore
		const screenshot = webcamRef.current.getScreenshot();
	// @ts-ignore
		setImage(screenshot);
		console.log(screenshot);
	}, [webcamRef]);



	return (
	<div>
		<div className="flex flex-col items-center h-screen w-full justify-center">
			<h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-2">FaceID</h3>
			{/* @ts-ignore */}
			{image ? (
				<img src={image} alt="webcam" />
				) : (
				<WebCam height={600} width={600} ref={webcamRef} />
			)}
			<button
			className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
			onClick={capturePhoto}
			>
			Advance
			</button>
		</div>
	</div>
 )
}

export default FaceID