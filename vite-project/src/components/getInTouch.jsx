import React from 'react';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
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

  // const handleCaptcha =(value)=>{
  //   if(value){
  //     setCaptchaVerified(true)
  //   }else{
  //     setCaptchaVerified(false)
  //   }
  // }

  const submitHandler = async (e) => { 
    console.log('form submit handler',formData)
    e.preventDefault();
    let formErrors = { ...error};

    // if (formData.name === "") formErrors.name = "Please enter name";
    // // if (formData.name === "") formErrors.name("Please enter name");
    // if (formData.email === "") {
    //   formErrors.email = "Please enter email";
    // } else if (!emailRegex.test(formData.email)) {
    //   formErrors.email = "Please enter a valid email address";
    // }
    // if (formData.subject === "") formErrors.subject = "Please enter subject";
    // if (formData.lastname === "") formErrors.lastname = "Please enter lastname";
    // if (formData.notes === "") formErrors.notes = "Please enter note";
    // if (formData?.phone_no === "") {
    //   formErrors.phone_no = "Please enter phone number";
    // } else if (!/^\d{10}$/.test(formData.phone_no)) {
    //   formErrors.phone_no = "Phone number must be exactly 10 digits";
    // }
    // if (!captchaVerified) {
    //   alert("Please complete the reCAPTCHA.");
    //   return;
    // }
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
        alert("Your message has been sent successfully!");
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
        alert("There was an error sending the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem with the server.");
    } finally {
      // setIsLoading(false);
    }
  };


      return (
        <div>
        <h1 className='bg-slate-800 text-white font-bold text-5xl justify-center flex pt-6 border-4 align-middle m-auto pb-7'>Get In touch</h1>
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="#" method="POST" onSubmit={submitHandler}>
            <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
                  >
              First Name
            </label>
            <input
              type="text"
              name="name"
              id="first-name"
              value={formData.name}
              // onChange={(e)=>setFormData(e.target.value)}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

            <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base font-medium text-[#07074D]"
              >
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              value={formData.lastname}
              // onChange={(e)=>setFormData(e.target.value)}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
              placeholder="Full Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
             >
              Email 
            </label>
            <input
              type="email"
              name="email"
              id="email"
              // onChange={(e)=>setFormData(e.target.value)}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}

              value={formData.email}
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="subject"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone No
            </label>
            <input
              type="phone-no"
              name="phone-no"
              id="phone-no"
              value={formData.phone_no}
              onChange={(e) => setFormData({ ...formData, phone_no: e.target.value })}
              placeholder="Enter your Mobile Number"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="subject"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={FormData.subject}
              // onChange={(e)=>setFormData(e.target.value)}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Enter subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="notes"
              class="mb-3 block text-base font-medium text-[#767676]"
               >
              Notes
            </label>
            <textarea
              rows="4"
              name="notes"
              id="notes"
              placeholder="Type your Notes here"
              value={formData.notes}
              // onChange={(e)=>setFormData(e.target.value)}
              // onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}

              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
          <div className="recaptcha-container">
            <div container spacing={2} style={{ justifyContent: "center" }}>
              {/* <div item xs={12}>
                <ReCAPTCHA
                  sitekey="6Lf165EqAAAAAGMB2fjKkFOvkFPTXrgoOoa4lXs9"
                  onChange={handleCaptcha}
                />
              </div> */}
            </div>
          </div>
            <button
              class="hover:shadow-form align-middle flex justify-center m-auto rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
      )
    }

    export default GetInTouch
