import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import axios, {AxiosError} from "axios"
import { useEffect, useState } from "react"
import { useIsAuthenticated } from "react-auth-kit"

const Register = () : JSX.Element => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const isAuth = useIsAuthenticated();
    const onSubmit = async (values: any) => {
        setError("");
        try {
            const response = await axios.post(
                "/api/register",
                values
            );
            console.log(response)
            navigate("/login");
        } catch (err) {
            if (err && err instanceof AxiosError) setError(err.response?.data.message);
            else if (err && err instanceof Error) setError(err.message);
            console.log("Error: ", err);
        }
    };
    useEffect(() => {
        if (isAuth()) navigate("/")
    }, [])
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        onSubmit,
    });

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <h1>{error}</h1>
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                    </div>
                </div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Username 
                        </label>
                        <input
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                       Register 
                    </button>
                </form>
            </div>
        </main>
    )
}

export default Register