import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'

function BlogPost({ title, author, post, index, handleDeletePost }) {
    return (
        <li>
            <h3>{title}</h3>
            <h5>{author}</h5>
            <h6>{post}</h6>
            <Button
                index={index}
                handleDeletePost={handleDeletePost}
                type={'Delete'}
            />
        </li>
    )
}

export default BlogPost

BlogPost.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    post: PropTypes.string,
    index: PropTypes.number,
    handleDeletePost: PropTypes.func,
}
