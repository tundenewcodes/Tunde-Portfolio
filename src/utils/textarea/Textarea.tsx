import { IFormTextarea } from "../../types/types";
import "./Textarea.css"


const TextareaComponent = ({
  placeholder,
  name,
  cName,
  id,
  onChange,
  style,
  value,
  hasLabel,
  label
}: IFormTextarea) => {
  return (
    <>
      <div className="d-flex flex-column">
        {hasLabel && (<label className="form-label">{label}</label>)}
        <textarea
          data-aos="fade-up"
          data-aos-once="true"
          name={name}
          placeholder={placeholder}
          className={`textarea ${cName}`}
          id={id}
          onChange={onChange}
          style={style}
          defaultValue={value}
        ></textarea>
      </div>
    </>
  );
};

export default TextareaComponent;
