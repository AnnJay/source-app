import { actions } from "../../../utils/reducer";

export const ElementComponent = ({ name, dispatch, index, currentUrlId }) => {
  return (
    <li
      className={`list-item ${
        currentUrlId === index ? "list-item--selected" : ""
      }`}
      onClick={() =>
        dispatch({ type: actions.changeCurrentURL_ID, payload: index })
      }
    >
      {name}
    </li>
  );
};
