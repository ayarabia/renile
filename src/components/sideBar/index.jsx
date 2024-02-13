import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import rightArrow from "../../assets/right-arrow.svg";
const Sidebar = () => {
  const location = useLocation();
  const menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: (color) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.38652 4.61973C8.5518 4.60077 8.90618 4.56011 9.24535 4.704C9.52421 4.82231 9.76863 5.04344 9.91419 5.30909C10.0248 5.51105 10.059 5.70532 10.0724 5.85055C10.0835 5.97038 10.0834 6.10446 10.0833 6.21144C10.0833 6.21887 10.0833 6.22618 10.0833 6.23333V10.45C10.0833 10.9634 10.0833 11.2201 10.1832 11.4162C10.2711 11.5886 10.4114 11.7289 10.5838 11.8168C10.7799 11.9167 11.0366 11.9167 11.55 11.9167H15.7667C15.7738 11.9167 15.7811 11.9167 15.7886 11.9167C15.8955 11.9166 16.0296 11.9165 16.1494 11.9276C16.2947 11.941 16.4889 11.9752 16.6909 12.0858C16.9566 12.2314 17.1777 12.4758 17.296 12.7546C17.4399 13.0938 17.3992 13.4482 17.3803 13.6135C17.3784 13.6299 17.3767 13.6445 17.3754 13.657C17.2409 14.9977 16.7795 16.2895 16.0263 17.4168C15.1198 18.7735 13.8313 19.8309 12.3238 20.4553C10.8163 21.0798 9.15751 21.2431 7.55717 20.9248C5.95682 20.6065 4.48681 19.8207 3.33303 18.667C2.17925 17.5132 1.39351 16.0432 1.07518 14.4428C0.756854 12.8425 0.920231 11.1837 1.54465 9.6762C2.16908 8.1687 3.2265 6.88023 4.58321 5.97371C5.7105 5.22048 7.00233 4.75906 8.34301 4.62455C8.35551 4.62329 8.37008 4.62162 8.38652 4.61973Z"
              fill={color}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6134 0.953048C13.6299 0.954934 13.6445 0.956606 13.657 0.957859C15.5425 1.14699 17.3151 1.98121 18.667 3.33304C20.0188 4.68486 20.853 6.45748 21.0421 8.34304C21.0434 8.35554 21.0451 8.37011 21.0469 8.38656C21.0659 8.55184 21.1066 8.90622 20.9627 9.24538C20.8443 9.52423 20.6232 9.76864 20.3576 9.9142C20.1556 10.0248 19.9613 10.059 19.8161 10.0724C19.6963 10.0835 19.5622 10.0834 19.4552 10.0833C19.4478 10.0833 19.4405 10.0833 19.4333 10.0833L13.5667 10.0833C13.5597 10.0833 13.5526 10.0833 13.5455 10.0833C13.4363 10.0834 13.3059 10.0834 13.191 10.074C13.0579 10.0632 12.8672 10.0353 12.6674 9.93347C12.4087 9.80164 12.1984 9.59129 12.0665 9.33257C11.9647 9.13279 11.9368 8.94213 11.926 8.80901C11.9166 8.69414 11.9166 8.56373 11.9167 8.45454C11.9167 8.44738 11.9167 8.44031 11.9167 8.43333V2.56667C11.9167 2.55951 11.9167 2.5522 11.9167 2.54477C11.9166 2.43779 11.9165 2.30371 11.9276 2.18388C11.941 2.03866 11.9751 1.84438 12.0858 1.64242C12.2313 1.37677 12.4758 1.15565 12.7546 1.03733C13.0938 0.893438 13.4482 0.934089 13.6134 0.953048Z"
              fill={color}
            />
          </svg>
        );
      },
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: (color) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M16.352 20.1667H5.64804C5.16484 20.1667 4.74795 20.1667 4.4046 20.1387C4.0422 20.109 3.68175 20.0437 3.3349 19.8669C2.81746 19.6033 2.39676 19.1826 2.13311 18.6651C2.03917 18.4808 1.9767 18.2926 1.93433 18.1023C1.91132 17.999 1.89982 17.9473 1.90554 17.8779C1.91007 17.823 1.93098 17.7511 1.95665 17.7023C1.98903 17.6407 2.03509 17.5947 2.12721 17.5025L7.33337 12.2964L8.93165 13.8947C9.00882 13.9719 9.10101 14.0641 9.18886 14.1387C9.29068 14.2252 9.44523 14.3402 9.65848 14.4095C9.93464 14.4993 10.2321 14.4993 10.5083 14.4095C10.7215 14.3402 10.8761 14.2252 10.9779 14.1387C11.0657 14.0642 11.1579 13.9719 11.2351 13.8947L14.6667 10.463V11.9167C14.6667 12.4229 15.0771 12.8333 15.5834 12.8333C16.0896 12.8333 16.5 12.4229 16.5 11.9167V8.25001C16.5 7.74375 16.0896 7.33335 15.5834 7.33335H11.9167C11.4104 7.33335 11 7.74375 11 8.25001C11 8.75627 11.4104 9.16668 11.9167 9.16668H13.3703L10.0834 12.4537L8.48511 10.8554C8.40793 10.7781 8.31576 10.6859 8.22789 10.6113C8.12607 10.5249 7.97152 10.4098 7.75827 10.3405C7.48211 10.2508 7.18464 10.2508 6.90848 10.3405C6.69523 10.4098 6.54068 10.5249 6.43886 10.6113C6.35102 10.6859 6.25887 10.7781 6.1817 10.8553L3.08525 13.9518C2.69257 14.3444 2.49624 14.5408 2.32767 14.5541C2.18141 14.5656 2.03847 14.5064 1.94319 14.3948C1.83337 14.2662 1.83337 13.9886 1.83337 13.4332V5.64801C1.83336 5.16481 1.83335 4.74792 1.8614 4.40457C1.89101 4.04217 1.95638 3.68172 2.13311 3.33487C2.39676 2.81742 2.81746 2.39673 3.3349 2.13308C3.68175 1.95635 4.0422 1.89098 4.4046 1.86137C4.74795 1.83331 5.16481 1.83333 5.64802 1.83334H16.3521C16.8353 1.83333 17.2521 1.83331 17.5955 1.86137C17.9579 1.89098 18.3183 1.95635 18.6652 2.13308C19.1826 2.39673 19.6033 2.81742 19.867 3.33487C20.0437 3.68172 20.1091 4.04217 20.1387 4.40457C20.1667 4.74792 20.1667 5.16478 20.1667 5.64799V16.352C20.1667 16.8352 20.1667 17.2521 20.1387 17.5955C20.1091 17.9579 20.0437 18.3183 19.867 18.6651C19.6033 19.1826 19.1826 19.6033 18.6652 19.8669C18.3183 20.0437 17.9579 20.109 17.5955 20.1387C17.2521 20.1667 16.8352 20.1667 16.352 20.1667Z"
              fill={color}
            />
          </svg>
        );
      },
    },
    {
      title: "Settings",
      path: "/settings",
      icon: (color) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M8.61219 17.7568L9.14793 18.9618C9.30719 19.3204 9.5671 19.6252 9.89614 19.839C10.2252 20.0529 10.6092 20.1667 11.0016 20.1667C11.3941 20.1667 11.7781 20.0529 12.1071 19.839C12.4362 19.6252 12.6961 19.3204 12.8553 18.9618L13.3911 17.7568C13.5818 17.3293 13.9026 16.9729 14.3077 16.7383C14.7155 16.5031 15.1871 16.403 15.6552 16.4521L16.9661 16.5917C17.3563 16.6329 17.7501 16.5601 18.0997 16.382C18.4493 16.204 18.7398 15.9283 18.9359 15.5884C19.1322 15.2488 19.2258 14.8594 19.2051 14.4676C19.1845 14.0759 19.0507 13.6985 18.8198 13.3813L18.0437 12.3149C17.7673 11.9324 17.6197 11.4719 17.622 11C17.6219 10.5294 17.771 10.0708 18.0477 9.69018L18.8239 8.62379C19.0547 8.3066 19.1886 7.92923 19.2092 7.53745C19.2298 7.14567 19.1363 6.75632 18.94 6.41666C18.7439 6.07679 18.4534 5.80111 18.1038 5.62304C17.7541 5.44496 17.3603 5.37215 16.9702 5.41342L15.6593 5.55296C15.1912 5.60212 14.7195 5.50194 14.3118 5.26675C13.9059 5.03089 13.585 4.67257 13.3952 4.24314L12.8553 3.03824C12.6961 2.67957 12.4362 2.37482 12.1071 2.16094C11.7781 1.94707 11.3941 1.83326 11.0016 1.83333C10.6092 1.83326 10.2252 1.94707 9.89614 2.16094C9.5671 2.37482 9.30719 2.67957 9.14793 3.03824L8.61219 4.24314C8.42237 4.67257 8.10149 5.03089 7.69552 5.26675C7.2878 5.50194 6.81614 5.60212 6.34802 5.55296L5.03311 5.41342C4.64292 5.37215 4.24912 5.44496 3.89949 5.62304C3.54985 5.80111 3.25938 6.07679 3.0633 6.41666C2.86697 6.75632 2.77343 7.14567 2.79404 7.53745C2.81465 7.92923 2.94852 8.3066 3.17941 8.62379L3.95552 9.69018C4.2323 10.0708 4.38135 10.5294 4.38126 11C4.38135 11.4706 4.2323 11.9292 3.95552 12.3098L3.17941 13.3762C2.94852 13.6934 2.81465 14.0708 2.79404 14.4625C2.77343 14.8543 2.86697 15.2437 3.0633 15.5833C3.25957 15.923 3.55008 16.1986 3.89966 16.3766C4.24925 16.5547 4.64295 16.6276 5.03311 16.5866L6.34395 16.447C6.81206 16.3979 7.28373 16.4981 7.69145 16.7332C8.09893 16.9684 8.42131 17.3268 8.61219 17.7568Z"
              stroke="#5E635A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48121 12.5188 8.25 11 8.25C9.48121 8.25 8.24999 9.48121 8.24999 11C8.24999 12.5188 9.48121 13.75 11 13.75Z"
              stroke="#5E635A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      },
    },
  ];

  return (
    <div className="bg-white text-white relative flex flex-col pb-9 ps-8 pe-5">
      <img src={logo} alt="logo" className="block  pt-[44px] mb-12" />
      <ul>
        {menus.map((item) => {
          return (
            <li
              className={`${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-[#5E635A]"
              } flex items-center font-medium  text-sm mb-8`}
              key={item.title}
            >
              <p>
                {item.icon(
                  location.pathname === item.path ? "#589130" : "#5E635A"
                )}
              </p>
              <Link to={item.path} className="ms-3 me-[22px]">
                {item.title}
              </Link>
              <img
                src={rightArrow}
                alt="right-arrow"
                className={`${
                  location.pathname === item.path ? "block" : "hidden"
                }  `}
              />
            </li>
          );
        })}
      </ul>
      <div className="flex-grow"></div>
      <div className="sticky bottom-[19px]">
      <div className="bg-farm bg-no-repeat shadow-6xl rounded-[20px] relative  h-[225px] bg-cover">
        <div className="bg-[#006665] font-medium text-xs w-full text-center pt-3 pb-4 px-3 absolute bottom-[50px]">
          <p className="mb-1">You can manage </p>
          <p>multiple farms here!</p>
        </div>
        <Link className="font-semibold text-base w-full text-white absolute rounded-b-[20px] bottom-0 bg-primary block px-[21px] py-4 text-center">
          + Add Farm
        </Link>
      </div>
      </div>
  
  
  
    </div>
  );
};

export default Sidebar;
