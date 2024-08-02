import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RealEstatePage} from "./pages/RealEstatePage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }

    const {worker} = await import('./mocks/browser')

    return worker.start()
}

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
enableMocking().then(() => root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RealEstatePage/>
        </QueryClientProvider>
    </React.StrictMode>
));
