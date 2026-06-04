import { useContext } from "react"
import { TaskContext } from "../Contexts/TaskContext"

const useTask = () => {
  return useContext(TaskContext);
}

export default useTask