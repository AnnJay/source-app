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
    <div>
      <button className="button" onClick={() => inputFileRef.current.click()}>
        Загрузить из файла
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: actions.fetchUrlsFromLocalStorage })}
      >
        Загрузить
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: actions.saveUrlsInLocalStorage })}
      >
        Сохранить
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: actions.countRowsAndColumns })}
      >
        Рассчитать
      </button>

      <input
        type="file"
        className="hidden"
        onChange={handleFileUpload}
        ref={inputFileRef}
      />
    </div>
  );
};
