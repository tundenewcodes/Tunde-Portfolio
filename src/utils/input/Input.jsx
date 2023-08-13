
import "./Input.css"


const InputComponent = ({
  placeholder,
  name,
  type,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label
}) => {
  return (
    <>
      <div
        className="d-flex flex-column"
      >
        {hasLabel && (<label className="form-label">{label}</label>)}
        <input
          data-aos="fade-up"
          data-aos-once="true"
          name={name}
          placeholder={placeholder}
          type={type}
          className={`input ${cName}`}
          id={id}
          onChange={onChange}
          style={style}
          defaultValue={value}
        />
      </div>
    </>
  );
};

export default InputComponent;
