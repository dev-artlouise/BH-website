import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center ">
            <div>
                <h2 className="text-3xl font-bold mb-4">404 Page Not Found</h2>
                <div className="mt-8">
                    <Link to="/" className="text-sm text-slate-950 bg-white px-3 py-2 border rounded-full">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound