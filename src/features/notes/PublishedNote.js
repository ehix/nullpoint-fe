import { useNavigate } from 'react-router-dom'
import { useGetPublishedQuery } from './notesApiSlice'
import { memo } from 'react'

const PublishedNote = ({ noteId }) => {

    const { note } = useGetPublishedQuery("publishedList", {
        selectFromResult: ({ data }) => ({
            note: data?.entities[noteId]
        }),
    })

    const navigate = useNavigate()

    if (note) {
        const userProfile = () => navigate(`/profile/${note.username}`)
        const created = new Date(note.createdAt).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric'})
        // const updated = new Date(note.updatedAt).toLocaleString('en-GB', { day: 'numeric', month: 'long' })
        return (
            <div className="post__content">
                <h1 className="post__title">{note.title}</h1>
                {/* <p className="">{updated}</p> */}
                <p className="post__body">{note.text.substring(0, 80)}...</p>
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