import { Copy01Icon } from "hugeicons-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBox = ({ Code, CodingLanguage, titleOfCode }) => {
  const codeString = `${Code}`;

  const [isCopied, setIsCopied] = useState(false);
  const [copyCodeClipBoard, setCopyCodeClipBoard] = useState("");
  const copyCode = () => {
    /*  here we are copying our code in clipboard and after 3 seconds we are changing the state of `isCopied`  */
    setCopyCodeClipBoard(navigator.clipboard.writeText(Code));
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  return (
    <div className="border md:w-[500px] max-h-[700px] w-[90%]  mx-auto mt-4 md:mt-0 h-auto rounded-md pt-2 pb-1 bg-slate-100">
      <div className="flex items-center justify-between pb-2 px-6">
        <h3 className="  text-blue-900 capitalize">{titleOfCode}</h3>
        <button
          className="cursor-pointer hover:text-yellow-400 "
          onClick={copyCode}
        >
          {isCopied ? (
            <span className="text-green-900">copied</span>
          ) : (
            <Copy01Icon />
          )}
        </button>
      </div>
      <div className="  rounded-md px-4 mb-1 py-2 mx-auto">
        <SyntaxHighlighter
          language={CodingLanguage}
          style={nightOwl}
          customStyle={{
            padding: "10px",
            borderRadius: "5px 7px",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBox;
