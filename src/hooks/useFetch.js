import { useRef, useState, useEffect } from "react";

export const useFetch = (url) => {

    const isMounted = useRef(true)

    const [value, setValue] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setValue({ data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setValue({ data, loading: false, error: null })
                }
            })
            .catch(error => {
                setValue({ data: null, loading: false, error });
            });
    }, [url]);

    return value;

};
