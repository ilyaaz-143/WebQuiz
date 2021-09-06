import FetchData from "../FetchData";
import Question from "../Quiz/Questions";
export default function PHP({ Subject, Level }) {
  const [data, loading] = FetchData(
    `https://quizapi.io/api/v1/questions?apiKey=ePDBnZAcfG3RnasHMhEI3oJ038vvOR3vD2Q4zCm0&difficulty=${Level}&limit=20&tags=${Subject}`
  );
  // console.log(
  //   `https://quizapi.io/api/v1/questions?apiKey=ePDBnZAcfG3RnasHMhEI3oJ038vvOR3vD2Q4zCm0&difficulty=${Level}&limit=20&tags=${Subject}`
  // );
  return (
    <div>
      {loading ? <Question question={data} Level={Level} /> : "loading..."}
    </div>
  );
}
