import '../stylesheets/CategorySelect.css'

function CategorySelect () {
    return (
        <div className="category-container">
            <select name="select" id="category-selector">
                <option value="social-media">Social Media</option>
                <option value="studies">Studies</option>
                <option value="work">Work</option>
                <option value="hobbies">Hobbies</option>
            </select>
        </div>
    )
}

export default CategorySelect
