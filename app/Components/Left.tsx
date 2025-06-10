import Posts from "./LeftChild/Posts";
import Comments from "./LeftChild/Comments";
import Dm from "./LeftChild/Dm";
import { Button } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store/currentState";
import { RootState } from "../store/Store";

export default function Home() {
  const currentState = useSelector((state:RootState) => state.current.current);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (currentState === "post") {
      dispatch(updateState("comments"));
    } else if (currentState === "comments") {
      dispatch(updateState("dm"));
    } else if (currentState === "dm") {
      console.log("done");
    }
  };

  return (
    <div className="w-[30%] h-full overflow-y-auto bg-white p-6 border-r border-gray-300 flex flex-col relative">
      <Posts />
      {currentState === "comments" || currentState === "dm" ? <Comments /> : null}
      {currentState === "dm" ? <Dm /> : null}

      <Button
        variant="solid"
        className="absolute w-[20%]"
        sx={{ margin: 1 }}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}
