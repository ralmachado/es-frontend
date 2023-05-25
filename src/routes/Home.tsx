import { useNavigate } from "react-router-dom"

export const Home = () : JSX.Element => {
    const navigate = useNavigate();
    return (
        <div>
            <button className="flex items-center gap-2 px-6 py-3.5 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200" 
                onClick={() => navigate("/qread")}>
                <svg xmlns="http://www.w3.org/2001/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                     <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
                Read QR code
            </button>
            
        </div>
    )
}
export default Home