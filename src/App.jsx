import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Component/LoadingScreen"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      // simulate real work:
      await Promise.all([
        new Promise(res => setTimeout(res, 1500)), // replace with API calls
      ]);

      setLoading(false);
    };

    loadApp();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div>
          <h1>Main App Content</h1>
        </div>
      )}
    </>
  );
}

export default App;