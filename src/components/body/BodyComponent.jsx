import { useEffect } from "react";

import { InfoComponent } from "./info/InfoComponent";
import { ListComponent } from "./list/ListComponent";
import { useDispatch, useSelector } from "react-redux";
import { clearJson, loadJSON } from "../../state/reducers/jsonSlice";

export const BodyComponent = () => {
  const { urls, currentURL_ID } = useSelector((state) => state.urls);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentURL_ID >= 0) {
      dispatch(loadJSON(urls[currentURL_ID].url));
      dispatch(clearJson());
    }
  }, [currentURL_ID]);

  return (
    <div className="col-8 h-100 p-3 d-flex flex-column rounded-4 bg-primary">
      <h2 className="text-center fs-4 mb-4">Список источников данных</h2>

      <ListComponent />

      <InfoComponent />
    </div>
  );
};
