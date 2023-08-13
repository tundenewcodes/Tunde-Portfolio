import { createContext, useState } from "react";



export const useContexts = () => {
  const [showSubNavBar, setShowSubNavBar] = useState<boolean>(false);

  const subNavbarContext = createContext({ showSubNavBar, setShowSubNavBar });

  const handleChangeSubNavBar = (value: boolean) => {
    setShowSubNavBar(value);
  }

  return {
    subNavbarContext,
    showSubNavBar,
    setShowSubNavBar,
    handleChangeSubNavBar
  }

}
