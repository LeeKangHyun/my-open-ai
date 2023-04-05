import { Configuration } from 'openai';
import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

function useHome() {
  const confRef = useRef<MutableRefObject<typeof Configuration>>(null);

  useEffect(() => {
    if (confRef.current == null) {
      confRef.current = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
    }
  }, []);
}

export default useHome;
