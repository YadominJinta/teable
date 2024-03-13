import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import type { IFileItemInner } from '../FilePreviewContext';

interface ITextPreviewProps extends IFileItemInner {}

export const TextPreview = (props: ITextPreviewProps) => {
  const { src } = props;
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch(src).then((response) => {
      response.text().then((text) => {
        setFileContent(text);
      });
    });
  }, [src]);

  return (
    <div style={{ overflow: 'auto', height: '100%', whiteSpace: 'pre-line' }}>
      <SyntaxHighlighter language="plaintext" wrapLongLines>
        {fileContent}
      </SyntaxHighlighter>
    </div>
  );
};
