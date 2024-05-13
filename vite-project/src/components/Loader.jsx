import { useState, useEffect } from "react";

const Loader = () => {
  const [value, setvalue] = useState(0);

  const timeoutFun = () => {
    if (value < 100) {
      setvalue(value + 1);
      console.log(value);
    } else {
      console.log("end the progress");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      timeoutFun();
    }, 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <section className="w-screen relative ">
      <div className="max-w-md flex flex-col gap-1 relative text-center mx-auto">
        <p>Progress Bar</p>
        <div className="w-full bg-gray-200 rounded flex relative justify-start">
          <p
            className={`z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium ${
              value < 52 ? "text-black" : "text-white"
            }`}
          >
            {value}%
          </p>
          <div
            className="h-5 bg-green-500 rounded transition-all duration-500 ease-in-out origin-left"
            style={{ width: `${value}%`, transformOrigin: "left" }}
          ></div>
        </div>
        <p>{value < 100 ? "Loading..." : "Completed"}</p>
      </div>
    </section>
  );
};

export default Loader;
