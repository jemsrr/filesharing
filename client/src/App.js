import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";
import x from "./bgImg.png";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[60%] h-[60%] rounded-xl bg-red-200 flex flex-col justify-start gap-10 py-20 items-center">
        <h1 className="text-4xl font-extrabold text-sky-800">
          Simpel file sharing!
        </h1>
        <p className="text-2xl font-light text-sky-950">
          Upload and share the download link.
        </p>
        <button
          onClick={onUploadClick}
          className="bg-sky-800 px-10 py-4 rounded-xl text-3xl font-extrabold text-sky-200"
        >
          Upload
        </button>
        <input
          className="hidden"
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a
          href={result}
          className="text-blue-600 font-extralight text-xl hover:underline"
        >
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
