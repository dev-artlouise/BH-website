const EmailField = ({ email, setEmail }) => {
    return (
        <div className="mb-4">

            <label htmlFor="email" className="block text-md font-medium leading-6">
                Email
            </label>

            <div className="mt-2">
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-xl border-0 bg-gray-50 px-3 py-3 text-md leading-4 text-gray-900 shadow-sm shadow-red-100/50 ring-1 ring-inset ring-gray-200 transition-colors duration-200 ease-in-out placeholder:text-gray-400 hover:bg-white focus:border-0 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-950/60"
                    placeholder="Enter your email"
                />
            </div>

        </div>
    );
};

export default EmailField;