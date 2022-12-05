import React from 'react'
import { useSelector } from "react-redux";

import Loading from '../components/loading';
import Success from '../components/success';

const SuccessRemove = () => {

    const { response } = useSelector((state: any) => state)

    return (
        <>
            {
                response.loading && <Loading />
            }
            {
                response.successRemove && <Success msg={response.successRemove} />
            }
        </>
    )
}

export default SuccessRemove