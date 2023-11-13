import { useGetPublishedQuery } from "./notesApiSlice"
import PublishedNote from "./PublishedNote"
import PulseLoader from 'react-spinners/PulseLoader'

const PublishedNotesList = () => {

    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPublishedQuery('publishedList', {
        pollingInterval: 600000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })
    let content

    if (isLoading) content = <PulseLoader color={"#FFF"} />

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = notes
        const publishedNotes = ids?.length && ids.map(noteId => <PublishedNote key={noteId} noteId={noteId} />)
        content = (
            <section className="post__container">
                {publishedNotes}
            </section>
        )
    }

    return content
}
export default PublishedNotesList