import { useRef } from "react";
import { useState } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
export default function App() {
  const [value, setValue] = useState("");
  const [uniq, setUniq] = useState(null);

  const onChange = (e) => {
    const valueAfterFilter = e.target.value.replace(/[^А-яЁё\s A-Za-z\s]/g, "");
    let uniq = new Set(
      valueAfterFilter
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim()
        .split(/\ | /)
        .sort()
    );
    const test = [...uniq];
    uniq = test.filter((item) => {
      if (test.includes(item.slice(0, -2))) {
        return false;
      } else if (test.includes(item.slice(0, -1))) {
        return false;
      } else {
        return true;
      }
    });
    setUniq(uniq);
    setValue(valueAfterFilter);
  };


  const tableRef = useRef("table_main");
  return (
    <div className="container">
      <textarea
rows={10}
        id="text"
        onChange={onChange}
        value={value}
        placeholder="Текст Сюда"
      ></textarea>
      <div>
        <button className="btn1" onClick={()=> {setValue(''); setUniq(null)}}>Сброс</button>
        <button
          className={uniq ? "btn" : "btn_dis"}
          disabled={!uniq ? "disabled" : ""}
        >
          <DownloadTableExcel
            filename="words"
            sheet="words"
            currentTableRef={tableRef.current}
          >
            {uniq ? "Скачивать можно" : "Жду текст"}
          </DownloadTableExcel>
        </button>
      </div>
      <table ref={tableRef} className="table">
        <tbody>
          {uniq?.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
