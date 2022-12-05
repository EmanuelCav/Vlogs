import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { createVlogAction } from '../../../../server/actions/vlog.action';
import ErrorCreate from '../../../../response/messages/errorCreate';

const Create = ({ setIsCreating, user }: any) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialStateVlog = {
        title: "",
        description: "",
        information: ""
    }

    const [vlogData, setVlogData] = useState(initialStateVlog)
    const [imageData, setImageData] = useState("")

    const { title, description, information } = vlogData

    const cancelCreate = () => {
        setIsCreating(false)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setVlogData({ ...vlogData, [name]: value })
    }
    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        setImageData(files as any)
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement | HTMLParagraphElement>) => {
        e.preventDefault()

        try {

            var formData = new FormData()

            formData.append('title', title)
            formData.append('description', description)
            formData.append('information', information)

            for (var i = 0; i < imageData.length; i++) {
                formData.append('files', imageData[i])
            }

            dispatch(createVlogAction(formData, user.user.token, navigate) as any)

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='container-create'>
            <form className='container-form-create' onSubmit={handleSumbit}>
                <ErrorCreate />
                <div className='separator'>
                    <label htmlFor='title' className='label-form'>Title</label>
                    <input type='text' name='title' className='input-form' value={title} onChange={handleChange} />
                </div>
                <div className='separator'>
                    <label htmlFor='description' className='label-form'>Description</label>
                    <textarea name='description' className='input-form' style={{ resize: 'none', height: '76px', fontSize: '18px' }} value={description} onChange={handleChange} />
                </div>
                <div className='separator'>
                    <label htmlFor='information' className='label-form'>Information</label>
                    <textarea name='information' className='input-form' style={{ resize: 'none', height: '140px', fontSize: '18px' }} value={information} onChange={handleChange} />
                </div>
                <div className='separator'>
                    <label htmlFor='files' className='label-form'>Images</label>
                    <input type='file' name="files" className='input-form' onChange={handleChangeImage} multiple />
                </div>
                <div className='separator'>
                    <div className='container-actions-create'>
                        <p className='cancel-create' onClick={cancelCreate}>Cancel</p>
                        <button className='create-create'>Create</button>
                    </div>
                </div >
            </form >
        </div >
    )
}

export default Create