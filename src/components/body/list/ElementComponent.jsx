import { useDispatch, useSelector } from "react-redux";

import { changeCurrentUrl } from "../../../state/reducers/urlsSlice";

export const ElementComponent = ({ name, index }) => {
  const { currentURL_ID } = useSelector((state) => state.urls);
  const dispatch = useDispatch();

  return (
    <li
      className={`list-group-item text-center ${
        currentURL_ID === index ? "list-group-item-success" : ""
      }`}
      onClick={() => dispatch(changeCurrentUrl({ id: index }))}
    >
      {name}
    </li>
  );
};
