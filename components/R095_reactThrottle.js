import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import throttle from 'lodash/throttle';

const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(
    throttle(async (acceptedFiles) => {
      if (isUploading) {
        console.log('이미 업로드 중입니다. 잠시 기다려주세요.');
        return;
      }

      setIsUploading(true);

      try {
        const file = acceptedFiles[0];
        setUploadedImage(file);

        const formData = new FormData();
        formData.append('image', file);

        // 실제 서버 엔드포인트 URL로 변경하세요
        const response = await axios.post('http://localhost:3000/UserApproval', formData);

        console.log('File uploaded successfully', response);
      } catch (error) {
        console.error('File upload error', error);
      } finally {
        setIsUploading(false);
      }
    }, 1000),
    [isUploading]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div className="container mt-5">
        <div className="border p-4">
          <div
            {...getRootProps()}
            className="dropzone text-center border-dashed p-4"
          >
            <input {...getInputProps()} />
            <p>이미지를 여기로 드래그하거나 클릭하여 업로드하세요.</p>
            <button
              className={`btn btn-primary ${isUploading ? 'disabled' : ''}`}
              onClick={() => {
                if (!isUploading) {
                  const input = document.querySelector('input[type="file"]');
                  if (input) {
                    input.click();
                  }
                }
              }}
            >
              {isUploading ? '업로드 중...' : '업로드'}
            </button>
          </div>
          {uploadedImage && (
            <div className="mt-4">
              <p>업로드한 이미지:</p>
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded"
                className="img-thumbnail"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ReactThrottle = () => {
  const throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);

  return (
    <div>
      <ImageUpload />
    </div>
  );
};

export default ReactThrottle;
