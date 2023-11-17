import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./css/styles.css";

export default function Data() {
  const [triviaFact, setTriviaFact] = useState("");
  const [mathFact, setMathFact] = useState("");
  const [dateFact, setDateFact] = useState("");
  const [yearFact, setYearFact] = useState("");
  const [num, setNum] = useState(0);
  const [date, setDate] = useState("2023-11-17");
  const [year, setYear] = useState("2023");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://numbersapi.com/${num}/trivia?json`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(true);
        setTriviaFact(json);
      });
  }, [num]);

  useEffect(() => {
    fetch(`http://numbersapi.com/${num}/math?json`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(true);
        setMathFact(json);
      });
  }, [num]);

  useEffect(() => {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    fetch(`http://numbersapi.com/${month}/${day}/date?json`)
      .then((res) => res.json())
      .then((json) => {
        setIsLoaded(true);
        setDateFact(json);
      });
  }, [date]);

  useEffect(() => {
    fetch(`http://numbersapi.com/${year}/year?json`)
      .then((res) => res.json())
      .then((json) => {
        if (year <= 2023) {
          setYearFact(json);
        } else {
          alert("Invalid year. The year should not exceed 2023");
        }
        setIsLoaded(true);
      });
  }, [year]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavBar />
      <h1>Interesting Facts about Numbers</h1>
      <h3>---- Number Facts ----</h3>
      <form>
        <input
          name="num"
          type="number"
          placeholder="Enter a number"
          onChange={(e) => setNum(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </form>
      <p>
        <b>Trivia:</b> {triviaFact.text}
      </p>
      <p>
        <b>Math Fact:</b> {mathFact.text}
      </p>

      <h3>* ---- Date Facts ----</h3>
      <form>
        <input
          name="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </form>
      <p>
        <b>Date Fact:</b> {dateFact.text}
      </p>
      <small>
        <i>
          * Note that the year input above is not a part of data from the API
        </i>
      </small>
      <br />
      <br />

      <h3>---- Year Facts ----</h3>
      <form>
        <input
          name="date"
          type="number"
          max={2023}
          placeholder="Enter the year"
          onChange={(e) => setYear(e.target.value)}
          style={{ marginRight: "10px" }}
        />
      </form>
      <p>
        <b>Year Fact:</b> {yearFact.text}
      </p>
    </>
  );
}
