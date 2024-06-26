function TodoItem({ TodoItem }) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            {TodoItem.title}
        </div>
    )
}

export default TodoItem;