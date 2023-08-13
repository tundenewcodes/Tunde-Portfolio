
import AnchorLink from "react-anchor-link-smooth-scroll";



const Link = ({ page, selectedPage, setSelectedPage, closeModal }) => {
  const lowerCasePage = page.toLocaleLowerCase().trim() 
  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    closeModal();
  };

  return (
    <AnchorLink
      data-aos="fade-down"
      data-aos-duration="300"
      href={`#${lowerCasePage}`}
      onClick={handleClick}
      style={{
        color: `${selectedPage === lowerCasePage ? "green" : "white"}`,
        transition: "ease-out",
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
