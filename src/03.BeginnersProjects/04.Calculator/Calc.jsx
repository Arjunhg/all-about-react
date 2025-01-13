import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calc.css";

const Calc = () => {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-wrapper">
      <form className="calculator" name="calc" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={input}
          className="value"
          readOnly
          aria-label="Calculator display"
        />
        <button type="button" className="button clear" onClick={clear}>
          C
        </button>
        <button type="button" className="button" onClick={() => display("/")}>
          /
        </button>
        <button type="button" className="button" onClick={() => display("*")}>
          *
        </button>
        <button type="button" className="button" onClick={() => display("-")}>
          -
        </button>
        <button type="button" className="button" onClick={() => display("7")}>
          7
        </button>
        <button type="button" className="button" onClick={() => display("8")}>
          8
        </button>
        <button type="button" className="button" onClick={() => display("9")}>
          9
        </button>
        <button
          type="button"
          className="button plus"
          onClick={() => display("+")}
        >
          +
        </button>
        <button type="button" className="button" onClick={() => display("4")}>
          4
        </button>
        <button type="button" className="button" onClick={() => display("5")}>
          5
        </button>
        <button type="button" className="button" onClick={() => display("6")}>
          6
        </button>
        <button type="button" className="button" onClick={() => display("1")}>
          1
        </button>
        <button type="button" className="button" onClick={() => display("2")}>
          2
        </button>
        <button type="button" className="button" onClick={() => display("3")}>
          3
        </button>
        <button type="button" className="button" onClick={() => display("0")}>
          0
        </button>
        <button type="button" className="button" onClick={() => display("00")}>
          00
        </button>
        <button type="button" className="button" onClick={() => display(".")}>
          .
        </button>
        <button type="button" className="button equal" onClick={calculate}>
          =
        </button>
      </form>
    </div>
  );
};

export default Calc;