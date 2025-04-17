'use client';
import { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function SignaturePad() {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [trimmedDataURL, setTrimmedDataURL] = useState('');

  function clear() {
    sigCanvas.current?.clear();
  }

  function trim() {
    if (!sigCanvas.current) return;

    setTrimmedDataURL(
      sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
    );
  }

  return (
    <fieldset>
      <legend>Signature</legend>
      <div>
        <SignatureCanvas ref={sigCanvas} />
      </div>
      <div>
        <button onClick={clear}>Clear</button>
        <button onClick={trim}>Trim</button>
      </div>
      {trimmedDataURL ? (
        <img alt="trimmed signature" src={trimmedDataURL} />
      ) : null}
    </fieldset>
  );
}
