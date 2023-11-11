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
        pollingInterval: 60000,
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
            // <table className="table table--notes">
            //     <thead className="table__thead">
            //         <tr>
            //             <th scope="col" className="table__th note__title">Title</th>
            //             <th scope="col" className="table__th note__username">Author</th>
            //             <th scope="col" className="table__th">Text</th>
            //             <th scope="col" className="table__th note__created">Created</th>
            //             <th scope="col" className="table__th note__updated">Updated</th>
            //         </tr>
            //     </thead>
            //     <tbody>
            //         {tableContent}
            //     </tbody>
            // </table>
            <section className="post__container">
                {publishedNotes}
            </section>
        )
    }

    return content
}
export default PublishedNotesList