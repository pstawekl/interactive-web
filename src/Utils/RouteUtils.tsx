import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../Views/Home";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}