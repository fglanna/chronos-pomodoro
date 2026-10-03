import { useEffect, useState } from "react";
import { Bounce, ToastContainer } from "react-toastify";

type AvailableThemes = 'dark' | 'light';

type MessagesContainerProps = {
  children?: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainerProps) {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return (localStorage.getItem('theme') as AvailableThemes) || 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme =
        (document.documentElement.getAttribute('data-theme') as AvailableThemes) ||
        'dark';
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {children}

      <ToastContainer
        position='top-center'
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'dark' ? 'light' : 'dark'}
        transition={Bounce}
      />
    </>
  );
}