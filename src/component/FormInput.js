
import React from "react";

const InputForm = props => {
    return (
      <form className="todoInput"   onSubmit={props.newItemSubmitHandler}>
        <input
          className="input"
          type="text"
          onChange={props.handleItemInput}
          value={props.pendingItem}
          placeholder="Add an item"
      />
      <button type="submit" name="submit" value="submit">
        add
      </button>
     
    </form>
    
  );
};

export default InputForm;