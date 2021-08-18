import { FC } from "react";
import { Skeleton } from "primereact/skeleton";

const TenantPage: FC = () => {
  return (
    <>
      <Skeleton
        key="headerImageSkeleton"
        shape="rectangle"
        width="100%"
        height="12rem"
      />
      <Skeleton
        key="menuBarSkeleton"
        shape="rectangle"
        width="100%"
        height="5rem"
        className="p-mt-2"
      />
      <div
        className="p-shadow-10 p-d-block p-mx-auto p-mt-6"
        style={{ width: "75%" }}
      >
        <div
          className="p-field p-col-12 p-md-6 p-p-md-6 p-d-block p-mx-auto"
          style={{ width: "100%" }}
        >
          <Skeleton width="100%" height="150px"></Skeleton>
          <div className="p-d-flex p-jc-between p-mt-3">
            <Skeleton width="4rem" height="2rem"></Skeleton>
            <Skeleton width="4rem" height="2rem"></Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantPage;
