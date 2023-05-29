/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FaceID = () => {
	const navigate = useNavigate();
	const refVideo = useRef<HTMLVideoElement | null>(null);
	const refPhoto = useRef<HTMLCanvasElement | null>(null);
	const [photoExist, setExistPhoto] = useState(false);

	const imageVideo = () => {
		navigator.mediaDevices.getUserMedia({
			video: {width: 1920, height: 1080}
		}).then((stream) => {
			const video = refVideo.current;
			if (video){
				video.srcObject = stream;
				video.play();
			}
		}).catch(error => console.error(error))
	};
    const capturePhoto = () => {
		const image = refPhoto.current;
		const video = refVideo.current;
		if (image) {
			image.width = 640;
			image.height = (640 / (16/9));
			const context = image.getContext("2d");
			if (context) {
				if (video){
					console.log('lmao')
					context.drawImage(video, 0, 0, 640, (640 / (16/9)));
					const lmao = image.toDataURL();
					console.log(lmao.split(",")[1]);
				}
			}
		}
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
				<div className="border-2 border-black h-auto w-auto">
				<canvas ref={refPhoto}></canvas>
				</div>
			<button className="px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150 w-64 mt-10"
				onClick={capturePhoto}>Advance</button> 
		</div>
	</div>
 )
}

export default FaceID