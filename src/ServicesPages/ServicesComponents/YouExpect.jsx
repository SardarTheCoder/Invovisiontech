import { BsCheckCircle } from "react-icons/bs";
export const YouExpect = (prop) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto px-6 py-12">
          <div className="mx-auto w-2/4">
            <h3 style={{color:'#1c57a6'}} className="text-center text-4xl font-bold">{prop.Heading}</h3>
            <p className="text-center py-10">{prop.Details}</p>
          </div>
          <div className="flex mx-auto text-sm sm:text-[15px] md:gap-10 md:w-2/4">
            <div className="  w-2/4 py-10">
              <ul>
                {prop.left_List_Item_1 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_1}
                  </li>
                )}
                {prop.left_List_Item_2 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_2}
                  </li>
                )}
                {prop.left_List_Item_3 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_3}
                  </li>
                )}
                {prop.left_List_Item_4 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_4}
                  </li>
                )}
                {prop.left_List_Item_5 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_5}
                  </li>
                )}
                {prop.left_List_Item_6 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_6}
                  </li>
                )}
                {prop.left_List_Item_7 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_7}
                  </li>
                )}
                {prop.left_List_Item_8 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_8}
                  </li>
                )}
                {prop.left_List_Item_9 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.left_List_Item_9}
                  </li>
                )}
              </ul>
            </div>
            <div className=" w-2/4 py-10">
              <ul>
                {prop.right_List_Item_1 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_1}
                  </li>
                )}
                {prop.right_List_Item_2 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_2}
                  </li>
                )}
                {prop.right_List_Item_3 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_3}
                  </li>
                )}
                {prop.right_List_Item_4 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_4}
                  </li>
                )}
                {prop.right_List_Item_5 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_5}
                  </li>
                )}
                {prop.right_List_Item_6 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_6}
                  </li>
                )}
                {prop.right_List_Item_7 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_7}
                  </li>
                )}
                {prop.right_List_Item_8 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_8}
                  </li>
                )}
                {prop.right_List_Item_9 && (
                  <li className="flex font-semibold py-5">
                    <span className="text-sky-500 ">
                      <BsCheckCircle />
                    </span>
                    &nbsp; {prop.right_List_Item_9}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto">
            <p className="text-center font-semibold  py-10">
              {prop.bottomData}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
