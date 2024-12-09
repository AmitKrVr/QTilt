import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-auto">
                {error.message}
            </pre>
            <button
                onClick={() => window.location.reload()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-80 transition-opacity">
                Try again
            </button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={appStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
);
