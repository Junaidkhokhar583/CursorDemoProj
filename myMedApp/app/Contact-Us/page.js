"use client"
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import Button from "../components/Button";
import Header from "../components/Header";
import BaseFooter from "../components/BaseFooter";
import GeneralFooter from "../components/GeneralFooter";


export default function ContactUs() {
  return (
    <div>
      <Header/>
      {/* { Contact us - hero section } */}
      <div className="w-full h-auto bg-[#648491] grid grid-flow-row text-center py-10 relative">
        <div className="px-4 md:px-16 lg:px-64 grid gap-6">
          <p className="text-[#f2f7fa] text-base md:text-lg lg:text-xl leading-6 md:leading-10">
            Connect with Us – Your Questions, Our Answers!
          </p>
          <h3 className="text-[white] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Contact Us
          </h3>
          <p className="text-[#f2f7fa] text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
            Have questions, feedback, or need assistance? We’re here to ensure
            you get the answers you need, whether you're looking for more
            information or just want to connect with our team. Reach out to us,
            and we'll get back to you as soon as possible to help you on your
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10 items-start px-4 md:px-16 lg:px-64 mt-10">
          <div className="text-left">
            <TfiEmail size={48} className="mb-2 text-[#0a2532]" />
            <h5 className="text-xl md:text-2xl font-bold">E-mail</h5>
            <p className="text-[#dbe2ed] text-sm md:text-base leading-6 md:leading-7 mt-2">
              Drop Us an Email – We're Here to Help! Whether you have questions,
              feedback, or just want to connect, we’re always ready to respond.
            </p>
            <a
              href="mailto:TMWG@gmail.com"
              className="underline text-white hover:text-[#1200ff] inline-block mt-2"
            >
              TMWG@gmail.com
            </a>
          </div>
          <div className="text-left">
            <FaPhoneVolume size={48} className="mb-2 text-[#0a2532]" />
            <h5 className="text-xl md:text-2xl font-bold">Phone</h5>
            <p className="text-[#dbe2ed] text-sm md:text-base leading-6 md:leading-7 mt-2">
              Call Us Anytime – We’re Ready to Assist! Whether it’s a question,
              concern, or you just want to talk, our team is here to take your
              call.
            </p>
            <p className="underline text-white hover:text-[#1200ff] inline-block mt-2">
              619-799-5598
            </p>
          </div>
          <div className="text-left">
            <TfiLocationPin size={48} className="mb-2 text-[#0a2532]" />
            <h5 className="text-xl md:text-2xl font-bold">Office</h5>
            <p className="text-[#dbe2ed] text-sm md:text-base leading-6 md:leading-7 mt-2">
              Find Us at Our Location – Your Health is Our Priority! Whether you
              need a consultation, treatment, or are looking for guidance, we’re
              here to support you every step of the way.
            </p>
            <p className="underline text-white hover:text-[#1200ff] inline-block mt-2">
              123 Sample St. Sydney NSW 2000, Au
            </p>
          </div>
        </div>
      </div>

      {/* {Input Form section } */}

      <div className="bg-[#f2f7fa] w-full">
  <div className="grid px-4 md:px-16 lg:px-64 py-10">
    <p className="text-2xl md:text-3xl">Inquiry</p>
    <br/>
    <h3 className="text-4xl md:text-5xl ml-[-3px] font-bold">Get In Touch</h3>
    <br/>
    <p className="text-lg md:text-xl leading-7">
      Have a question or concern? Fill out the form below to reach us.
    </p>

    <div className="grid gap-6 mt-10">
      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="form-control w-full">
          <span className="label-text text-base">First Name</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text text-base">Last Name</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </label>
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="form-control w-full">
          <span className="label-text text-base">E-mail</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <span className="label-text text-base">Phone Number</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
      </div>

      {/* Radio Options */}
      <div className="mt-6">
        <p className="leading-7 text-lg">Which option best describes you?</p>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Other'].map((option, index) => (
            <div className="form-control" key={index}>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-options"
                  className="radio h-5 w-5 appearance-auto"
                  
                />
                <span className="label-text text-lg">{option}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mt-6">
        <label className="form-control w-full">
          <span className="label-text text-lg">Message</span>
          <textarea
            className="textarea textarea-bordered w-full h-40 resize-none"
            placeholder="Your message..."
          ></textarea>
        </label>
      </div>

      {/* Terms and Submit */}
      <div className="flex items-start gap-2 mt-4">
        <input type="checkbox" className="checkbox appearance-auto w-[1.2rem]"/>
        <span className="leading-7 text-lg">I accept the Terms and Services</span>
      </div>

      <div className="mt-6">
        <Button
          type="button"
          text="Submit"
          className="rounded px-4 py-2 bg-black text-white"
          onClick={()=>{}}
        />
      </div>
    </div>
  </div>
</div>
<BaseFooter/>
<GeneralFooter/>
    </div>
  );
}
