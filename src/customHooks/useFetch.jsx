import React, { useEffect, useState } from 'react';

function useFetch (url) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(setData)
    }, []);

    return { data };
}

export default useFetch;
