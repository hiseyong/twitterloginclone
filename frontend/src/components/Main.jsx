import { useNavigate } from "react-router";
import { useEffect } from "react";

export function Main() {
    const navigate = useNavigate();
    useEffect(()=> {
        navigate('/login')
    },[])
}