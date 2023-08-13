

type Props = {};

const Copyright = (props: Props) => {
  return (
    <>
      <p
        className="copyright"
        data-aos="fade-up"
        data-aos-once="true"
      >
        ©{" "}Eratek {new Date().getFullYear()}. All rights reserved
      </p>
    </>
  );
};

export default Copyright;
