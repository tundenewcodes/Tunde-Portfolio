import { SelectedLink } from "../../types/appTypes";
import Link from "./Link";



const Navlinks = ({
  selectedPage,
  setSelectedPage,
  styles,
  cName,
  closeModal,
}) => {
  return (
    <div
      className={cName}
      style={{
        cursor: "pointer",
        ...styles,
      }}
    >
      <Link
        page={SelectedLink.Home}
        selectedPage={selectedPage}
        closeModal={closeModal}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.About}
        selectedPage={selectedPage}
        closeModal={closeModal}
        setSelectedPage={setSelectedPage}
      />

      <Link
        page={SelectedLink.Progress}
        selectedPage={selectedPage}
        closeModal={closeModal}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.Projects}
        selectedPage={selectedPage}
        closeModal={closeModal}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.Services}
        selectedPage={selectedPage}
        closeModal={closeModal}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.Contact}
        selectedPage={selectedPage}
        closeModal={closeModal}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Navlinks;
