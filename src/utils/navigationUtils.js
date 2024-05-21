// src/utils/navigationUtils.js
import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();
  return (path) => {
    if (/^https?:\/\//.test(path)) {
      window.location.href = path; // For external links
    } else {
      navigate(`/${path}`); // For internal routes
    }
  };
};
