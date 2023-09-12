import {useState} from "react";

const useLoading = (initial=false)=>{
    const [isLoading, setLoading] = useState(initial);
    const showLoading = ()=>{
        setLoading(data=> true);
    };
    const hideLoading = ()=>{
        setLoading(data=>false);
    };

    return [isLoading, showLoading, hideLoading];
};

export {useLoading};