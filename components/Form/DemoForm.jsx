import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";

export default function DemoForm() {
  function roundNearest5(num) {
    return Math.round(num / 5) * 5;
  }
  let gettingDate = new Date();
  let currentHours = gettingDate.getHours();
  let currentMinutes = gettingDate.getMinutes();
  const timeOne = `${
    currentHours + 1 <= 9 ? `0${currentHours + 1}` : currentHours + 1
  }:${
    currentMinutes <= 9
      ? `0${roundNearest5(currentMinutes)}`
      : roundNearest5(currentMinutes)
  } ${currentHours <= 12 ? "AM" : "PM"}`;
  const timeTwo = `${
    currentHours + 2 <= 9 ? `0${currentHours + 2}` : currentHours + 2
  }:${
    currentMinutes <= 9
      ? `0${roundNearest5(currentMinutes)}`
      : roundNearest5(currentMinutes)
  } ${currentHours <= 12 ? "AM" : "PM"}`;
  const [loading, setLoading] = useState(false);
  const givenTime = [timeOne, timeTwo];
  const [timeError, setTimeError] = useState(false);
  const [dateTimeSubmit, setDateTimeSubmit] = useState(false);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "none",
    privacyPolicy: "",
    date: date,
    time: time,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.role == "none") {
      toast.warning("Please Select Role", { autoClose: 2000 });
    } else if (isNaN(value.phone)) {
      toast.warning("Please input valid phone number", { autoClose: 2000 });
    } else {
      console.log({
        date: value.date,
        time: value.time,
        fname: value.firstName,
        lname: value.lastName,
        email: value.email,
        phone: value.phone,
        role: value.role,
      });
      setLoading(true);
      if (loading) {
        return;
      } else {
        axios
          .post(
            "",
            {
              date: value.date,
              time: value.time,
              fname: value.firstName,
              lname: value.lastName,
              email: value.email,
              phone: value.phone,
              role: value.role,
            }
          )
          .then(
            (res) => {
              setLoading(false);
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
              setSubmitted(true);
            },
            (err) => {
              alert("Something went wrong");
              setLoading(false);
            }
          );
      }
    }
  };
  const handleTimeSelection = (t) => {
    setTime(t);
  };
  const handleDateTimeSubmit = () => {
    if (time == undefined) {
      setTimeError(true);
    } else {
      setValue({ ...value, date: date.toString(), time });
      //   setValue({ ...value, date, time });
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
      setDateTimeSubmit(true);
    }
  };
  const handleReSubmit = () => {
    setValue({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "none",
      privacyPolicy: "",
      date: date,
      time: time,
    });
    setSubmitted(false);
    setDateTimeSubmit(false);
    console.log(date, time);
  };
  return (
    <section className="md:max-w-[50vw]">
      {dateTimeSubmit ? (
        <>
          {submitted ? (
            <div
              className="flex flex-col justify-center items-center w-full gap-6  text-center"
            >
              <Image
                width={150}
                height={150}
                src="/submit-successfully.png"
                alt="successfully-submitted"
              />
              <h1 className="text-2xl font-semibold">
                Your Demo has been booked!
              </h1>
              <p>
                Your Demo has been booked for
                <span className="font-medium">
                  &nbsp;{value.date.slice(4, 15)}&nbsp;at&nbsp;
                  {value.time}
                </span>
              </p>
              <p>You will be getting an email from us with all the details.</p>
              <p>See you there!</p>
              <button
                onClick={handleReSubmit}
                className="bg-gradient-to-b from-[#347DBA] to-[#5DB9A8] text-white text-xl font-bold px-4 py-3 rounded-md"
              >
                Book Again
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <input
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-[#616161] max-w-[360px] bg-white"
                type="text"
                placeholder="First Name"
                required
                value={value.firstName}
                onChange={(e) =>
                  setValue({ ...value, firstName: e.target.value })
                }
              />
              <input
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-[#616161] max-w-[360px] bg-white"
                type="text"
                placeholder="Last Name"
                required
                value={value.lastName}
                onChange={(e) =>
                  setValue({ ...value, lastName: e.target.value })
                }
              />
              <input
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-[#616161] max-w-[360px] bg-white"
                type="email"
                placeholder="Email"
                required
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <input
                className="px-4 py-3 border-2 border-gray-200 rounded-lg text-[#616161] max-w-[360px] bg-white"
                type="tel"
                placeholder="Phone"
                minLength="10"
                maxLength="10"
                required
                value={value.phone}
                onChange={(e) => setValue({ ...value, phone: e.target.value })}
              />
             
              <div className="max-w-[300px] flex gap-4 items-start">
                <input
                  className="mt-1"
                  id="check"
                  name="check"
                  type="checkbox"
                  required
                  value={value.privacyPolicy}
                  onChange={(e) =>
                    setValue({ ...value, privacyPolicy: e.target.checked })
                  }
                />
                <label className="text-xs font-medium" htmlFor="check">
                  I acknowledge that A1ITFirm uses my personal information in
                  accordance with its&nbsp;&nbsp;
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:border-b border-primary"
                  >
                    privacy policy.
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className={`${
                  value.firstName &&
                  value.lastName &&
                  value.email &&
                  value.role &&
                  value.phone &&
                  value.privacyPolicy != ""
                    ? "bg-gradient-to-b from-[#347DBA] to-[#5DB9A8] text-white"
                    : "bg-[#BDBDBD] cursor-not-allowed"
                } ${
                  loading ? "bg-[#BDBDBD] cursor-not-allowed" : ""
                } text-white px-4 py-3 rounded-md flex gap-5 justify-center items-center`}
              >
                {loading ? (
                  <>
                    Submitting
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          )}
        </>
      ) : (
        <main className="max-w-[50vh] flex flex-col items-center text-center gap-5 px-5">
          <p>Select one of the available dates</p>
          <Calendar
            onChange={setDate}
            value={date}
            maxDate={new Date(2023, 6, 1)}
            minDate={new Date()}
            // formatLongDate={(locale, date) => formatDate(date, "dd MMM YYYY")}
          />
          {date == undefined ? (
            ""
          ) : (
            <div
              className="flex flex-col gap-5 w-full min-w-[280px]"
            >
              <div className="">
                <p className={`${timeError ? "text-red-500" : ""}`}>
                  Select time
                </p>
                <p className="text-xs">&#40;Duration: 30min &#41;</p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {givenTime.map((t, index) => (
                  <div
                    key={index}
                    onClick={() => handleTimeSelection(t)}
                    className={`px-5 py-3 text-primary font-medium border border-primary rounded-md cursor-pointer ${
                      t == time ? "bg-gradient-to-b from-[#347DBA] to-[#5DB9A8] text-white" : "bg-gray-100"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>
              <button
                onClick={handleDateTimeSubmit}
                className={`${
                  time ? "bg-gradient-to-b from-[#347DBA] to-[#5DB9A8] text-white" : "bg-[#BDBDBD] cursor-not-allowed"
                }  text-white px-4 py-3 rounded-md w-full`}
              >
                Confirm
              </button>
            </div>
          )}
        </main>
      )}
    </section>
  );
}
