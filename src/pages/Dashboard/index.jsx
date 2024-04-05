import React from "react";
import CustomeButton from "../../components/customeButton";
import AllPonds from "../../components/allPonds";
import { useLocation } from "react-router-dom";
function Dashboard() {
  const buttons = [
    {
      text: "Monitor Your Farm",
      path: "https://renile.net",
      target: "_blank",
    },
    { text: "Ask Consultant", path: "https://renile.net", target: "_blank" },
    { text: "Add Pond", path: "/createnewpond", target: "" },
  ];
  const location = useLocation();
  const farmName = location.state?.name ?? "All Ponds";
  var farm = sessionStorage.getItem("farmId");

  return (
    <div>
      <div className=" px-[30px] pt-14 lg:col-start-1 lg:col-span-5  ">
        <div className="flex justify-between items-center flex-wrap mb-8">
          <p className="text-[#041300] font-medium text-[32px]">
            {farmName !== null ? farmName : "All Farms"}{" "}
          </p>
          <div className="flex items-center flex-wrap">
            {buttons.map((item, index) => {
              return (
                <div key={item.text}>
                  <CustomeButton
                    to={item.path}
                    text={item.text}
                    target={item.target}
                    className={`md:ms-4 my-4 me-2  lg:my-0 flex items-center  ${
                      index === 1 ? "text-primary" : "bg-primary text-white"
                    }    rounded-xl  shadow-3xl  font-semibold`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <AllPonds farmId={farm} />
      </div>
    </div>
  );
}
export default Dashboard;