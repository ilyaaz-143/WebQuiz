import { useState, useEffect } from "react";
export default function FetchData(url) {
  const [loading, seLoading] = useState(false);
  const [state, setState] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setState(data);
      seLoading(true);
    }
    getData();
  }, [url, seLoading, setState]);
  return [state, loading];
}
