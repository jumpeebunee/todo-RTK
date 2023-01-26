const TodoItem = () => {
  return (
    <li className="app__item">
      <div className="app__item-content">
        <div>
          <label className="app__item-checkbox">
            <input className="app__item-checkbox-input" type="checkbox"/>
            <span className="app__item-checkbox-span"></span>
          </label>
        </div>
        <h3 className="app__item-heading">Create new components</h3>
      </div>
    </li>
  )
}

export default TodoItem