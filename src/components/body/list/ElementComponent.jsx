import { actions } from "../../../utils/reducer";

export const ElementComponent = ({ name, dispatch, index, currentUrlId }) => {
  return (
    <li
      className={`list-group-item text-center ${
        currentUrlId === index ? "list-group-item-success" : ""
      }`}
      onClick={() =>
        dispatch({ type: actions.changeCurrentURL_ID, payload: index })
      }
    >
      {name}
    </li>
  );
};
