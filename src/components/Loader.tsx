import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = ({ loading }: { loading?: boolean }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color={"yellow"}
        loading={loading ?? true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
