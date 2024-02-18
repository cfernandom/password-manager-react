import '../stylesheets/UsrComment.css'

function UsrComment () {
    return (
        <div className='notes-container'>
            <label htmlFor='myTextArea'>Notes</label>
            <textarea
                name='myTextArea'
                id='myTextArea'
                cols='30'
                rows='5'
                placeholder='Comments about your password'>
            </textarea>
        </div>
    )
}

export default UsrComment
