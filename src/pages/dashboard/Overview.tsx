import Progress from "./progress/Progress";
import Tasks from "./tasks/Tasks";

const Overview = () => {
  return (
<div className="m-8">
  <div className="mb-20"><Progress /></div>
  <div className=""><Tasks /></div>
  
</div>
  )
};

export default Overview;
