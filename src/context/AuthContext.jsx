import { createContext, useState, useContext } from "react";

function readJson(key, fallback) {
    try{
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

const AuthContext = createContext(null);
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(()=> readJson("currentUser", null));

    function signup(username, email, password) {
        const users = readJson("users", [])

        if(users.find((u) => u.username === username || u.email === email)) {
            return { success: false, message: "User already exists" };
        }

        const newUser = { username, email, password };
        const sessionUser = { username, email };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(sessionUser));

        setUser(sessionUser);

        return { success: true };
    }

    function login(email, password) {
        const users = readJson("users", []);
        const found = users.find((u) => u.email === email && u.password === password);

        if (!found) return { success: false, message: "Invalid credentials" };

        const sessionUser = { username: found.username, email: found.email };
        localStorage.setItem("currentUser", JSON.stringify(sessionUser));
        setUser(sessionUser);
        return { success: true };
    }

    function logout() {
        localStorage.removeItem("currentUser");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signup, login, user, logout}}>
        {children}
        </AuthContext.Provider>
    );
}


    export function useAuth() {
        const context = useContext(AuthContext);
        if (!context) {
            throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
    }