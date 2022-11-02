import React, { useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Slider
      id="slider"
      defaultValue={0}
      min={0}
      max={100000}
      colorScheme="purple"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={20000} mt="1" ml="-2.5" fontSize="sm">
        ₹20000
      </SliderMark>
      <SliderMark value={35000} mt="1" ml="-2.5" fontSize="sm">
        ₹35000
      </SliderMark>
      <SliderMark value={50000} mt="1" ml="-2.5" fontSize="sm">
        ₹50000
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    companyName: "",
    email: "",
    sponsorshipAmount: "",
    message: "",
  });

  const handleOnChange = useCallback((e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }, []);

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        companyName: "",
        email: "",
        sponsorshipAmount: "",
        message: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: "https://formspree.io/f/mnqrdpga",
        data: inputs,
      }).then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div className="bg-black text-white flex flex-col justify-center min-h-screen" id="contactus">
      <div className="flex flex-1 flex-col justify-center items-center">
        <div>
          <Image src={"/assets/logo.png"} width={130} height={160} alt="logo" />
        </div>
        <h2 className="mt-14 text-4xl font-bold">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-8 px-10 lg:mt-10 min-w-full lg:min-w-[500px]"
        >
          {status.info.error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>:{" "}
              <span className="block sm:inline-">{status.info.msg}</span>
            </div>
          )}
          {status.submitted ? (
            <div
              className="text-white text-2xl font-bold px-4 py-3 rounded relative"
              role="alert"
            >
              Your message has been successfully sent. We will respond to you
              very soon!
            </div>
          ) : (
            <>
              <input
                id="companyName"
                required
                maxLength={128}
                type="text"
                placeholder="Company Name"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.companyName}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={128}
                placeholder="Your E-Mail Address"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.email}
              />
              <input
                id="sponsorshipAmount"
                required
                maxLength={12}
                type="text"
                placeholder="Sponsorship Amount (₹)"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
                onChange={handleOnChange}
                value={inputs.sponsorshipAmount}
              />
              <textarea
                id="message"
                name="message"
                required
                maxLength={1048576}
                placeholder="Your Message"
                className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16rem]"
                onChange={handleOnChange}
                value={inputs.message}
              ></textarea>
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-white text-black rounded-3xl px-8 py-2"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
