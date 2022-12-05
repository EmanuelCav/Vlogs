import React from 'react'
import { useSelector } from "react-redux";

import Error from '../components/error';
import Loading from '../components/loading';

const ErrorRegister = () => {

    const { response } = useSelector((state: any) => state)

    return (
        <>
            {
                response.loading && <Loading />
            }
            {
                response.errorRegister && <Error msg={response.errorRegister} />
            }
        </>
    )
}

export default ErrorRegister