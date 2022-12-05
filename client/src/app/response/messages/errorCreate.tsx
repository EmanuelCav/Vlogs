import React from 'react'
import { useSelector } from "react-redux";

import Error from '../components/error';
import Loading from '../components/loading';

const ErrorCreate = () => {

    const { response } = useSelector((state: any) => state)

    return (
        <>
            {
                response.loading && <Loading />
            }
            {
                response.errorCreate && <Error msg={response.errorCreate} />
            }
        </>
    )
}

export default ErrorCreate