import React, { useState, FC } from "react";

interface FilePreviewProps {
  file: File;
}

const PreviewImage: FC<FilePreviewProps> = ({ file }) => {
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result as string);
  };

  return (
    <div>
      {preview !== undefined && (
        <img src={preview} alt="preview" className="rounded-full  w-16 h-16" />
      )}
    </div>
  );
};

export default PreviewImage;
