"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(false);

  // Scroll durumunu kontrol et
  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-linear-to-b from-blue-800 to-gray-900 hover:bg-blue-900 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Sayfanın üstüne çık"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
