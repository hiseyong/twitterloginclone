import { useNavigate } from "react-router";
import { useEffect } from "react";

export function Other() {
    const navigate = useNavigate();
    useEffect(()=> {
        navigate('/login')
    },[])
}