import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function (route) {
  const [visable, setVisable] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(route)) {
      setVisable(false);
    } else {
      setVisable(true);
    }
  }, [location]);

  return visable;
}
