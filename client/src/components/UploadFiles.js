import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Loading } from "./Loading";

import uploadImg from "../assets/images/upload.png";
import upLoadImgFile from "../assets/images/file.png";

import "./uploadFiles.scss";

export const UploadFiles = () => {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (file) => {
    console.log(file[0].name);
    let archivos = [];
    for (let i = 0; i < file.length; i++) {
      console.log(file[i].name);
      archivos.push(file[i]);
      console.log(archivos);
    }

    setFiles(archivos);
    setLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [files]);

  return (
    <header className="box">
      <main>
        <section>
          <h2>Arrastre sus arhivos</h2>
        </section>
        <section>
          <div className="boxContent">
            <img className="boxImg" src={uploadImg} alt="" />
            <FileUploader
              className="inputFile"
              multiple={true}
              handleChange={handleChange}
              name="file"
            />
            <p className="pDropDrag">Haz click o arraste sus archivos aquí</p>
          </div>
          <div className="cardFile">
            {loading ? (
              <Loading />
            ) : (
              files &&
              files.map((file, index) => {
                return (
                  <div key={index} className="cardOneFile">
                    <div>
                      <img src={upLoadImgFile} alt="icono-archivo" />
                    </div>
                    <div>
                      <p>{file.name}</p>
                      <p>{file.size} bytes</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </main>
    </header>
  );
};
