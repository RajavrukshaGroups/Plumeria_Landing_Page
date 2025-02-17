import React from 'react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { SuccessMessage,ErrorMessage } from '../utils/toastify';
function GetInTouch() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", 
    lastname: "",
    notes: "",
    phone_no: "",
    consent: false,
  });
  const [ error, setError] =useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    notes: "",
    phone_no: "",
    consent: "",
  });

  const handleCaptcha =(value)=>{
    if(value){
      setCaptchaVerified(true)
    }else{
      setCaptchaVerified(false)
    }
  }

  const submitHandler = async (e) => { 
    console.log('form submit handler',formData)
    e.preventDefault();
    let formErrors = { ...error};

    if (formData.name === "") {
      ErrorMessage("Please enter name")
    }
    if (formData.email === "") {
      ErrorMessage("Please enter email")
    } 
    if (formData.subject === "") {
      ErrorMessage("Please enter subject")
    }
    if (formData.lastname === ""){
      ErrorMessage("Please enter lastname")
    }
    if (formData.notes === "") {
      ErrorMessage("Please enter note")
    }
    if (formData?.phone_no === "") {
      errorMessage("Please enter phone number")
    } else if (!/^\d{10}$/.test(formData.phone_no)) {
      errorMessage("Phone number must be exactly 10 digits")
    }
    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    const hasErrors = Object.values(formErrors).some((err) => err !== "");
    if (hasErrors) return;
    try {
      // setIsLoading(true);
      console.log("Preparing to send request to backend...",formData);
      const response = await fetch(
        "https://servermain.rajavrukshagroup.in/contact",
        // "http://localhost:4000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            lastName: formData.lastname,
            email: formData.email,
            subject: formData.subject,
            message: formData.notes,
            phone_no: formData.phone_no,
          }),
        }
      );

      if (response.ok) {
        SuccessMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          notes: "",
          phone_no: "",
          consent: false,
        });

        setError({
          name: "",
          email: "",
          subject: "",
          lastname: "",
          notes: "",
          phone_no: "",
          consent: false,
        });
      } else {
        ErrorMessage("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      ErrorMessage("There was a problem with the server.");
    }
  };


      return (
     <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 p-6">
      {/* Image Section */}
      {/* Form Section */}
      <div className="w-full md:w-1/2 border-2">
        <h1 className=" text-black font-bold text-4xl text-center py-4 rounded-md">
          Get In Touch
        </h1>
        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-[550px]">
            <form action="#" method="POST" onSubmit={submitHandler}>
              <div className="mb-4">
                <label className="block text-base font-medium text-[#07074D]">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="first-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Full Name"
                  className="w-full rounded-md border bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-[#07074D]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData({ ...formData, lastname: e.target.value })
                  }
                  placeholder="Last Name"
                  className="w-full rounded-md border bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-[#07074D]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="example@domain.com"
                  className="w-full rounded-md border bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-[#07074D]">
                  Phone No
                </label>
                <input
                  type="tel"
                  name="phone-no"
                  id="phone-no"
                  value={formData.phone_no}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_no: e.target.value })
                  }
                  placeholder="Enter your Mobile Number"
                  className="w-full rounded-md border bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-base font-medium text-[#07074D]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Enter subject"
                  className="w-full rounded-md border bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-base font-medium text-[#767676]">
                  Notes
                </label>
                <textarea
                  rows="4"
                  name="notes"
                  id="notes"
                  placeholder="Type your Notes here"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full rounded-md border bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>

              <div className="mb-4 flex justify-center">
                <ReCAPTCHA
                  sitekey="6Lf165EqAAAAAGMB2fjKkFOvkFPTXrgoOoa4lXs9"
                  onChange={handleCaptcha}
                />
              </div>
              <div className="text-center">
                <button className="rounded-md bg-[#6A64F1] py-3 px-6 text-base font-semibold text-white outline-none hover:shadow-md">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        {/* <img
          className="w-full mt-36 md:w-1/2 rounded-2xl border-4 border-green-300"
          src="https://rajavrukshagroup.in/static/media/plumeria_map.92935af996b62064f6c7.jpg"
          alt="Plumeria Map"
        /> */}
        <img
      className="w-full md:w-1/2 rounded-2xl border-4 border-green-300 mt-0 md:mt-24 lg:mt-28"
      src="https://rajavrukshagroup.in/static/media/plumeria_map.92935af996b62064f6c7.jpg"
      alt="Plumeria Map"
    />
    </div>
      )
    }

    export default GetInTouch
