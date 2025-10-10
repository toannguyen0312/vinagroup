import React, { useState } from "react";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";

export default function TextEditor() {
  const [content, setContent] = useState("");

  return (
    <>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="Start writing"
      />

      {/* Rendered (sanitized) HTML */}
      <div style={{ marginTop: 20 }}>
        <h3>Rendered Output:</h3>
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 12,
            minHeight: 100,
          }}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
      </div>
    </>
  );
}