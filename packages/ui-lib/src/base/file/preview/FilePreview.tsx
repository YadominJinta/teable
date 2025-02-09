import { useContext, useMemo } from 'react';
import { cn } from '../../../shadcn';
import { AudioPreview } from './audio/AudioPreview';
import { FilePreviewContext } from './FilePreviewContext';
import { getFileIcon } from './getFileIcon';
import { ImagePreview } from './image/ImagePreview';
import { TextPreview } from './text/TextPreview';
import { isAudio, isImage, isText, isVideo } from './utils';
import { VideoPreview } from './video/VideoPreviw';

interface IFilePreviewProps {
  className?: string;
}

export const FilePreview = (props: IFilePreviewProps) => {
  const { className } = props;
  const { currentFile } = useContext(FilePreviewContext);

  const mimetype = currentFile?.mimetype;

  const FileIcon = useMemo(() => (mimetype ? getFileIcon(mimetype) : ''), [mimetype]);

  if (!mimetype || !FileIcon) {
    return null;
  }

  if (isImage(mimetype)) {
    return <ImagePreview {...currentFile} />;
  }

  if (isVideo(mimetype)) {
    return <VideoPreview {...currentFile} />;
  }

  if (isAudio(mimetype)) {
    return <AudioPreview {...currentFile} />;
  }

  if (isText(mimetype)) {
    return <TextPreview {...currentFile} />;
  }

  return <FileIcon className={cn('max-w-max max-h-max w-40 h-40 ', className)} />;
};
