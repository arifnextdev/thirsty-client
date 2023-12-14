'use client';

import { UploadDropzone } from '@/app/src/utils/uploadthing';
import { useState } from 'react';

export default function Home() {
  const [images, setImages] = useState<
    {
      url: string;
      key: string;
    }[]
  >([]);

  return (
    <main className=' flex min-h-screen flex-col items-center justify-between p-24'>
      <UploadDropzone
        endpoint='imageUploader'
        onClientUploadComplete={(res: any) => {
          if (res) {
            setImages(res);
            const josn = JSON.stringify(res);
            console.log(josn);
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        className='imageuploader'
      />
    </main>
  );
}
