import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-full flex items-center justify-center bg-[var(--body-color)] py-20">
            <div className="text-center p-8 bg-[var(--container-color)] rounded-lg shadow-md">
                <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="space-x-4">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-[var(--main-color)] text-white rounded hover:bg-[var(--hover-color)] transition-colors"
                    >
                        Go Home
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;