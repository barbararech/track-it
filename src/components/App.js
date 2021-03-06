import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useState } from 'react';
import '../assets/styles/reset.css'

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HabitsScreen from "./HabitsScreen";
import TodayScreen from "./TodayScreen";
import HistoryScreen from "./HistoryScreen";


export default function App() {
    const [user, setUser] = useState({});
    const [percentage, setPercentage] = useState(0);

    return (
        <UserContext.Provider value={{ user, setUser, percentage, setPercentage }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/cadastro" element={<RegisterScreen />} />
                <Route path="/habitos" element={<HabitsScreen />} />
                <Route path="/hoje" element={<TodayScreen />} />  
                <Route path="/historico" element={<HistoryScreen />} />  
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}