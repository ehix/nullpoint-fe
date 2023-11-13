import { useNavigate } from 'react-router-dom'
import { useGetPublishedQuery } from './notesApiSlice'
import { memo, useState } from 'react'

const PublishedNote = ({ noteId }) => {
    const navigate = useNavigate()

    const { note } = useGetPublishedQuery("publishedList", {
        selectFromResult: ({ data }) => ({
            note: data?.entities[noteId]
        }),
    })
    const maxBodyLength = 75;
    const initialPostBody = note.text.length <= maxBodyLength ? note.text : note.text.substring(0, maxBodyLength) + '...';
    const [postBody, setPostBody] = useState(initialPostBody);
    
    function togglePostBody() {
        if (postBody === initialPostBody) {
            setPostBody(note.text);
        } else {
            setPostBody(initialPostBody);
        }
    }

    if (note) {
        const userProfile = () => navigate(`/users/${note.username}`);
        const created = new Date(note.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

        return (
            <div onClick={togglePostBody} className="post__content">
                <h1 className="post__title">{note.title}</h1>
                <p className="post__body">{postBody}</p>
                <div className="post__details">
                    <p onClick={userProfile} className="post__author">@{note.username}</p>
                    <p className="post__date">{created}</p>
                </div>
            </div>
        )
    } else return null
}

const memoizedNote = memo(PublishedNote)

export default memoizedNote