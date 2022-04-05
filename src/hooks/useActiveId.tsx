import { useEffect, useState } from "react";

const useActiveId = (itemIds: string[]) => {
  const [activeId, setActiveId] = useState(``);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds.forEach((id) => {
      if (document.getElementById(id)) {
        observer.observe(document.getElementById(id)!);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        if (!document.getElementById(id)) {
          return;
        }
        observer.unobserve(document.getElementById(id)!);
      });
    };
  }, [itemIds]);

  return activeId;
};

export default useActiveId;
