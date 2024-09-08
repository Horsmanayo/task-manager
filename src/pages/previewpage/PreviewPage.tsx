import Header from "./Header";
import PreviewTask from "./PreviewTask";
import Tasks from "./Tasks";

const PreviewPage = () => {
  return (
    <div className="max-w-[calc(100vw-256px)]">
      <Header />
      <div className="flex p-6">
        <PreviewTask />
        <Tasks />
      </div>
    </div>
  );
};

export default PreviewPage;
