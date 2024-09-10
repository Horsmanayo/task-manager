const Tasks = () => {
  return (
    <div className="">
      <div>
        <h1 className="font-bold">Assigned Assignments</h1>
        <h1 className="font-semibold text-xl">Creating Awesome Mobile Apps</h1>
        <h4 className="text-gray-500">UI UX Design.App Design</h4>
      </div>
      <div>
        <h1 className="font-bold text-xl">Detail Student</h1>
      </div>
      <div>
        <div className="flex justify-between flex-row pr-2 pl-1 mb-3">
          <p className="text-xs text-gray-500">Student Name</p>
          <h1 className="text-xs font-bold">Ibrahim</h1>
        </div>
        <div className="flex justify-between flex-row pr-2 pl-1 mb-3">
          <p className="text-xs text-gray-500">Student class</p>
          <h1 className="text-xs font-bold">Bio201</h1>
        </div>
        <div className="flex justify-between flex-row pr-2 pl-1 mb-3">
          <p className="text-xs text-gray-500">Student Number</p>
          <h1 className="text-xs font-bold">45</h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl">File Task</h1>
        <div className="flex justify-between flex-row pr-2 pl-1 mb-3">
          <p className="text-xs text-gray-500">Last Modified</p>
          <h1 className="text-xs font-bold">1 july 2024</h1>
        </div>
        <div className="mb-5">
          <input
            type="textarea"
            className="h-[150px] w-[250px] rounded-md border-dashed border-2 border-indigo-600 "
          />
          <p className="text-xs text-gray-500">drag or browser from device</p>
        </div>
      </div>
      <button className="bg-blue-900 w-[280px] h-[40px] rounded-md">
        {" "}
        submit
      </button>
    </div>
  );
};

export default Tasks;
