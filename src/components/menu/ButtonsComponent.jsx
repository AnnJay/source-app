import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { parseFileContent } from "../../utils/parseFileContent";
import { countRowsAndColumns } from "../../utils/count";
import { setUrls } from "../../state/reducers/urlsSlice";
import { clearJson, count } from "../../state/reducers/jsonSlice";
import {
  getUrlsFromLocalStorage,
  saveUrlsInLocalStorage,
} from "../../utils/localStorage";

export const ButtonsComponent = () => {
  const inputFileRef = useRef();

  const { urls } = useSelector((state) => state.urls);
  const { loadedJSON } = useSelector((state) => state.json);
  const dispatch = useDispatch();

  const handleFileUpload = async (event) => {
    const { files } = event.target;
    let file;

    if (files && files[0]) {
      file = files[0];
    } else {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;

      inputFileRef.current.value = "";
      dispatch(setUrls({ urls: parseFileContent(content) }));
      dispatch(clearJson());
    };

    reader.readAsText(file);
  };

  const handleDownloadFromStorage = () => {
    dispatch(setUrls({ urls: getUrlsFromLocalStorage() }));
    dispatch(clearJson());
  };

  return (
    <div className="d-flex flex-column gap-2">
      <button
        className="btn btn-light w-100"
        onClick={() => inputFileRef.current.click()}
      >
        Загрузить из файла
      </button>
      <button
        className="btn btn-light w-100"
        onClick={handleDownloadFromStorage}
      >
        Загрузить
      </button>
      <button
        className="btn btn-light w-100"
        onClick={() => saveUrlsInLocalStorage(urls)}
      >
        Сохранить
      </button>
      <button
        className="btn btn-light w-100"
        onClick={() => dispatch(count(countRowsAndColumns(loadedJSON)))}
      >
        Рассчитать
      </button>

      <input
        type="file"
        className="d-none"
        onChange={handleFileUpload}
        ref={inputFileRef}
      />
    </div>
  );
};
