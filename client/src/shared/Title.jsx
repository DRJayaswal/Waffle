import React from 'react'
import {Helmet} from 'react-helmet-async'
const Title = ({
    title = "Waffle",
    description = "Waffle is a social media platform for sharing your thoughts and ideas with the world. It is a place where you can connect with friends, family, and people from all over the world. It is a place where you can share your thoughts and ideas with the world. It is a place where you can connect with friends, family, and people from all over the world. It is a place where you can share your thoughts and ideas with the world. It is a place where",
}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
    </Helmet>
  )
}

export default Title;