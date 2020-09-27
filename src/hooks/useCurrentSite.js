import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function (route) {
  const [visable, setVisable] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(route)) {
      setVisable(true);
    } else {
      setVisable(false);
    }
  }, [location]);

  return visable;
}
