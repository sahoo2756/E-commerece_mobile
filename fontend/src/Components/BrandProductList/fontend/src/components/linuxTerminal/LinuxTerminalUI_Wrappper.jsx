import React, { useRef, useState } from "react";

function LinuxTerminalUI_Wrappper() {
  const [currentCommand, setCurrentCommand] = useState("");
  const [userCommand, setUserCommand] = useState("");
  const [message, setMessage] = useState("");
  const [containerInnerHTML, setContainerInnerHTML] = useState("");
  const divRef = useRef();

  const handleEnter = () => {
    console.log(userCommand)
    switch (userCommand) {
      case "help":
        setMessage(`$root >> ${userCommand} \n  You are typed help \n`);
        break;
      case "signin":
        setMessage(`$root >> ${userCommand} \n  You are typed help \n`);
        break;
      default:
        setMessage(`${message} \n $root >> ${userCommand} \n  You are typed help \n`);
    }
  
    // console.log(divRef)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter();
    }
  };

  function GetData() {
    console.log("I am GETDATA");
    return (
      <>
        <span>$ piyushgarg-dev </span>
        <input
          value={userCommand}
          onChange={(e) => setUserCommand(e.target.value)}
          type="text"
          className="inline bg-transparent  text-green-500 pl-3"
          spellCheck={false}
          onKeyDown={handleKeyPress}
          autoFocus
        />

        <div>{message}</div>
      </>
    );
  }

  return (
    <>
      <h1 className="text-2xl text-green-500">--Terminal</h1>
      <div className="linuxTerminalWrapperCustomCss w-full h-[300px] mt-2 border p-3 rounded-md">
        <p className="text-gray-500 mb-3">
          Welcome to my website! Get started by typing `help` command below
        </p>
        <div ref={divRef}>
          <div>
            {message}
          </div>
          <span>$ root &gt;&gt; </span>
          <input
            value={userCommand}
            onChange={(e) => setUserCommand(e.target.value)}
            type="text"
            className="inline bg-transparent  text-green-500 pl-3"
            spellCheck={false}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        </div>
      </div>
    </>
  );
}

export default LinuxTerminalUI_Wrappper;
