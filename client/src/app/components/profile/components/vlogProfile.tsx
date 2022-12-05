import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { likeVlogAction, unlikeVlogAction } from '../../../server/actions/vlog.action';

const VlogProfile = ({ vlog, user }: any) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isLike, setIsLike] = useState(false)

  const navigateVlog = () => {
    navigate(`/vlog/${vlog._id}`)
  }

  const likeVlog = () => {
    dispatch(likeVlogAction(vlog, vlog._id, user?.user) as any)
  }
  const unLikeVlog = () => {
    dispatch(unlikeVlogAction(vlog, vlog._id, user?.user, setIsLike) as any)
  }

  useEffect(() => {
    vlog.likes.find((userL: number) => {
      if (userL === user?.user.user.id) {
        setIsLike(true)
      }
    })
  }, [vlog.likes, user?.user.user.id, isLike])


  return (
    <div className='vlog-contain'>
      <div className='container-vlog' onClick={navigateVlog}>
        <h1 className='title-vlog'>{vlog.title}</h1>
        <p className='description-vlog'>{vlog.description}</p>
        <img src={vlog.images[0].image} alt='main-prof' className='image-vlog' />
      </div>
      <div className='container-likes'>
        {
          isLike ? <AiFillHeart className='like' onClick={unLikeVlog} /> : <AiOutlineHeart className='like' onClick={likeVlog} />
        }
        <p className='text-like'>{vlog.likes.length}</p>
      </div>
    </div>
  )
}

export default VlogProfile