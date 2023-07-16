import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes // use Routes instead of Switch
} from 'react-router-dom';
import Landing from './Landing.jsx'; // import your new Landing component
import Home from './home.jsx';
import TodoPage from './TodoPage.jsx';
import ContextProvider from '../context/Context.jsx'; // Make sure the import statement is correct

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Landing" element={<Landing />} />
                <Route path="/home" element={
                    <ContextProvider>
                        <Home />
                    </ContextProvider>
                } />
                <Route path="/todo/:index" element={
                    <ContextProvider>
                        <TodoPage />
                    </ContextProvider>
                } />
            </Routes>
        </BrowserRouter>
    )
}
