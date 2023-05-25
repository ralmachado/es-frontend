import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';

const FaceID = () => {
	const navigate = useNavigate();
	const refVideo = useRef<HTMLVideoElement | null>(null);
	const refPhoto = useRef<HTMLVideoElement | null>(null);
	const [photoExist, setExistPhoto] = useState(false);
	const imageVideo = () => {
		navigator.mediaDevices.getUserMedia({
			video: {width: 1290, height: 720}
		}).then((stream) => {
			const video = refVideo.current;
			if (video){
				video.srcObject = stream;
				video.play();
			}
		}).catch(error => console.error(error))
	};
	useEffect(() => {
		imageVideo();
	}, [refVideo])
	
	return (
	<div>
		<div className="flex flex-col items-center h-screen w-full justify-center">
			<h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-2">FaceID</h3>
			<div className="border-2 border-black h-auto w-auto">
				<video ref={refVideo}></video>
			</div>
			<button className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
				onClick={() => navigate("/prescription")}>Advance</button> 
		</div>
	</div>
 )
}

export default FaceID