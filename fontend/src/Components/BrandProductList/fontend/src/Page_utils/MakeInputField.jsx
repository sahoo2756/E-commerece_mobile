export default function MakeInputField({
  inputClassName,
  lebelClassName,
  mainDivContainerClassName,
  inputType = "text",
  name ,
  id,
  placeholder,
  requiredOP = false,
  stateVariable,
  stateVariableFunction,
  onChangeHandler,
  labelText,
}) {
  return (
    <div
      className={`relative flex flex-col gap-y-2 ${mainDivContainerClassName}`}
    >
      <label
        htmlFor={id}
        className={`cursor-text font-semibold  ${lebelClassName}`}
      >
        {labelText}
      </label>

      <input
        type={inputType}
        id={id}
        name={name}
        required={requiredOP}
        className={`w-[100%] border-[1px]  border-black rounded-md bg-transparent px-4 py-2 text-lg outline-none  ${inputClassName}`}
        placeholder={placeholder}
        value={stateVariable}
        // onChange={(e) => stateVariableFunction(e.target.value)}
        onChange={onChangeHandler}

      />
    </div>
  );
}
