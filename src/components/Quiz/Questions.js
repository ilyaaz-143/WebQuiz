import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
// import SelectDeficalty from "../SelectDeficalty";
function Question({ question, Level }) {
  const [state, setState] = useState(0);
  const [Score, setScore] = useState(0);
  const [check, setCheck] = useState(null);
  const data = question.map((ques) => ques.question);
  // const Choices = question.map((choice) => choice.answers);
  const answer = question.map((ans) => ans.correct_answer);
  // console.log(question.length);
  // let rigthAnswer = answer[state];
  // console.log(Score, rigthAnswer, check);
  const handleNext = () => {
    if (answer[state] === check) {
      setScore(Score + 1);
    } else {
      setScore(Score);
    }
    setState(state + 1);
  };
  return (
    <div className="Questions">
      <Link className="linkHome" to="/">
        Back
      </Link>
      <h3>Difficulty Level: {Level}</h3>
      {state < question.length ? (
        <div>
          <p>{`Score: ${Score}`}</p>
          <p>
            `Question {state + 1}: {data[state]}`
          </p>
          <div className="ans">
            <RadioGroup className="radio">
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value={state < question.length ? "answer_a" : "a"}
                    onChange={(e) => setCheck(e.target.value)}
                  />
                }
                label={
                  state < question.length && question[state].answers.answer_a
                }
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value={state < question.length ? "answer_b" : "b"}
                    onChange={(e) => setCheck(e.target.value)}
                  />
                }
                label={
                  state < question.length
                    ? question[state].answers.answer_b
                    : "b"
                }
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value={
                      question[state].answers.answer_c === null
                        ? "no"
                        : "answer_c"
                    }
                    onChange={(e) => setCheck(e.target.value)}
                  />
                }
                label={
                  state < question.length
                    ? question[state].answers.answer_c
                    : "d"
                }
              />

              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value={
                      question[state].answers.answer_d === null
                        ? "no"
                        : "answer_d"
                    }
                    onChange={(e) => setCheck(e.target.value)}
                  />
                }
                label={
                  state < question.length && question[state].answers.answer_d
                }
              />
            </RadioGroup>
          </div>
          <Button
            className="button"
            onClick={handleNext}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      ) : (
        <div>
          <p>{`Score: ${Score}`}</p>
        </div>
      )}
    </div>
  );
}

export default Question;
