"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchApi } from "@/utils/fetchApi";
import { PropsWithChildren } from "react";


interface GlobalContextType {
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
  error: any;
  setLoading: (loading: boolean) => void;
  fetchUserProfile: () => Promise<void>;
  setError: (error: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // useEffect(() => {
  //   fetchUserProfile();
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //   }
  // }, [user]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetchApi("/user/profile");
      setUser(response);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
      setUser(null);
    }
  };


  // // Authentication methods
  // const signup = async (userData) => {
  //   try {
  //     const data = await makeRequest("post", "/signup", userData);
  //     setUser(data.user);
  //     router.push(
  //       data.user.role === "admin" ? "/admin/dashboard" : "/dashboard"
  //     );
  //     return data;
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // const login = async (credentials) => {
  //   try {
  //     const data = await makeRequest("post", "/login", credentials);
  //     setUser(data.user);
  //     router.push(
  //       data.user.role === "admin" ? "/admin/dashboard" : "/dashboard"
  //     );
  //     return data;
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // // OTP methods

  // const sendPhoneOtp = async (mobile) => {
  //   try {
  //     const res = await axios.post(`${API_BASE}/send-phone-otp`, { mobile });
  //     return res.data;
  //   } catch (err) {
  //     throw err.response?.data?.message || "Failed to send OTP";
  //   }
  // };

  // const sendEmailOtp = async (email) => {
  //   try {
  //     const res = await axios.post(`${API_BASE}/send-email-otp`, { email });
  //     return res.data;
  //   } catch (err) {
  //     throw err.response?.data?.message || "Failed to send OTP";
  //   }
  // };

  // const verifyOtp = async (identifier, otp, type) => {
  //   try {
  //     const res = await axios.post(`${API_BASE}/verify-otp`, {
  //       identifier,
  //       otp,
  //       type,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     throw err.response?.data?.message || "OTP verification failed";
  //   }
  // };

  // const forgotPassword = async (mobile) => {
  //   try {
  //     const res = await axios.post(`${API_BASE}/forgot-password`, { mobile });
  //     return res.data;
  //   } catch (err) {
  //     throw err.response?.data?.message || "Password reset failed";
  //   }
  // };

  // const resetPassword = async (mobile, otp, newPassword) => {
  //   try {
  //     const res = await axios.post(`${API_BASE}/reset-password`, {
  //       mobile,
  //       otp,
  //       newPassword,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     throw err.response?.data?.message || "Password reset failed";
  //   }
  // };

  // const logout = async () => {
  //   try {
  //     await axios.post(`${API_BASE}/logout`, {}, { withCredentials: true });
  //   } catch {}
  //   setUser(null);
  //   router.push("/login");
  // };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        loading,
        error,
        setLoading,
        fetchUserProfile,
        setError,
        searchQuery, 
        setSearchQuery
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
