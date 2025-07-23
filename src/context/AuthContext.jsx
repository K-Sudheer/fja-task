import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hashPassword } from "../utils/hashPassword"
 
const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
 
  const navigate = useNavigate();
 
  const signup = useCallback( async (name, email, password) => {
    const key = `auth_${email}`;
    const existing = localStorage.getItem(key);
    if (existing) {
      throw new Error("Email already registered. Please login.");
    }
 
    const hashedPassword = await hashPassword(password);
    const newUser = { name, email, password: hashedPassword };
    localStorage.setItem(key, JSON.stringify(newUser));
    localStorage.setItem("user", JSON.stringify({ name, email }));
    setUser({ name, email });
  },[]);
 
  const login = useCallback (async (email, password) => {
    const storedUser = localStorage.getItem(`auth_${email}`);
    if (!storedUser) {
      throw new Error("User not found. Please sign up first.");
    }
 
    const parsedUser = JSON.parse(storedUser);
    const hashedPassword = await hashPassword(password);
    if (parsedUser.password !== hashedPassword) {
      throw new Error("Incorrect password.");
    }
 
    localStorage.setItem("user", JSON.stringify({ name: parsedUser.name, email }));
    setUser({ name: parsedUser.name, email });
  }, []);
 
  const logout = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }, [navigate]);
 
  const value = useMemo(() => ({ user, signup, login, logout}), [user, signup, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => useContext(AuthContext);
 