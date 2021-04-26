import React from 'react';
import { FileCard } from './FileCard';
import './index.scss';

/**
 * List of files card in placement page.
 * @returns 
 */
export const FileList = ({ files }) => {
  return (
    <div className="files-list">
      {files.map((file, index) => (
        <FileCard key={`index--${index}`} file={file} />
      ))}
    </div>
  )
}
