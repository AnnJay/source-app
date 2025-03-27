import { useRef } from "react";

import { parseFileContent } from "../../utils/parseFileContent";
import { actions } from "../../utils/reducer";

export const ButtonsComponent = ({ dispatch }) => {
  const inputFileRef = useRef();

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
      dispatch({
        type: actions.changeUrlsArray,
        payload: parseFileContent(content),
      });
    };

    reader.readAsText(file);
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
        onClick={() => dispatch({ type: actions.fetchUrlsFromLocalStorage })}
      >
        Загрузить
      </button>
      <button
        className="btn btn-light w-100"
        onClick={() => dispatch({ type: actions.saveUrlsInLocalStorage })}
      >
        Сохранить
      </button>
      <button
        className="btn btn-light w-100"
        onClick={() => dispatch({ type: actions.countRowsAndColumns })}
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
