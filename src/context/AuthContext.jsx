import { createContext, useState } from "react";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {

    const [user, setUser] = useState(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null);

    function signup(username, email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if(users.find((user) => user.username === username && user.email === email)) {
            return { success: false, message: "User already exists" };
        }

        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));

        setUser({ username: newUser.username, email: newUser.email, password: newUser.password });

        return { success: true };
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find((u) => u.email === email && u.password === password);

        if (!found) return { success: false, message: "Invalid credentials" };

        localStorage.setItem("currentUser", JSON.stringify(found));
        setUser(found);
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
