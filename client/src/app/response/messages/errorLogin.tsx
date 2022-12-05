import React from 'react'
import { useSelector } from "react-redux";

import Error from '../components/error';
import Loading from '../components/loading';

const ErrorLogin = () => {

    const { response } = useSelector((state: any) => state)

    return (
        <>
            {
                response.loading && <Loading />
            }
            {
                response.errorLogin && <Error msg={response.errorLogin} />
            }
        </>
    )
}

export default ErrorLogin