import React, { useRef, useState } from "react";

import FormInput from "./FormInput";

import ContactSuccess from "./ContactSuccess";
import ButtonComponent from "../../utils/button/ButtonComponent";

import { ButtonType } from "../../types/types";
import emailjs from "@emailjs/browser";

export default function FormContainer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [statusMessage, seStatusMessage] = useState("");
  const [isSucceeded, setIsSucceeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_p3ynqfi",
        "template_kd2qt5f",
        form.current,
        "74snSyU16A5EcYTEw"
      )
      .then(
        (result) => {
          setIsSucceeded(true);
          seStatusMessage("message sent successfully");
          setIsLoading(false);

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container" data-aos="fade-up" data-aos-once="true">
      {isSucceeded ? (
        <ContactSuccess />
      ) : (
        <form onSubmit={sendEmail} ref={form}>
          <div className="form-content">
            <FormInput
              placeholder={"Name"}
              name={"name"}
              type={"text"}
              id={""}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormInput
              placeholder={"Email "}
              name={"email"}
              type={"email"}
              id={""}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              placeholder={"Message"}
              name={"message"}
              type={"text"}
              id={""}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                height: "88px",
              }}
            />

            <ButtonComponent
              text={isLoading ? "Sending ..." : "Send Message"}
              style={{
                marginTop: "4rem",
                fontSize: "1rem",
              }}
              isLoading={isLoading}
              click={sendEmail}
              animatable={true}
              hasLine={false}
              buttonType={ButtonType.TERTIARY}
              cName=""
            />
          </div>
          {statusMessage && (
            <div
              className="errorMsg subtitle mt-0 mb-3 mx-3"
              style={{ fontSize: "1rem" }}
            >
              {statusMessage}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
