import React, { useState } from 'react';

const useStorage = ({ initData }) => {
    const data = initData;
    const [index, setIndex] = useState(0);
    const findIndex = (name) => {
        return data.indexOf(name) + 1 || NaN;
    }
    return {
        data,
        findIndex
    };
};

export default useStorage;