"use client";
import { updateBlock } from "@/app/actions";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function CodeEditor({ snippet }: any) {
  const [code, setCode] = useState(snippet.code);

  return (
    <div>
      <Editor
        height="40vh"
        width="70vw"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={(value) => setCode(value)}
      />
      <form action={updateBlock.bind(null, snippet.id, code)}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
