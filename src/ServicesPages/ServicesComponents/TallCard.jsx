import { TiTick } from "react-icons/ti";

export const TallCard = (props) => {
  return (
    <>
      <div className="w-[280px] h-[510px]  lg:w-[320px] lg:h-[530px] xl:w-[350px]  border-2 border-sky-100  bg-white flex  justify-content item-center mx-auto relative ">
        <div className="absolute px-6 py-4">
          <img src={props.cardImg} width="25%" alt={props.cardHeading} />
          <h3 style={{color:'#1c57a6'}} className=" text-xl font-bold py-4">{props.cardHeading}</h3>
          <p className=" ">{props.cardText}</p>
          <ul className="py-5">
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">
                {props.cardList}&nbsp;Responsive Design
              </p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">{props.cardList}&nbsp;Theming</p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">{props.cardList}&nbsp;Development</p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">{props.cardList}&nbsp;Design</p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">{props.cardList}&nbsp;Consulting</p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">{props.cardList}&nbsp;Strategy</p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">{props.cardList}&nbsp; Integration</p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">
                {props.cardList}&nbsp;Migrations & Upgrades
              </p>
            </li>
            <li className="flex gap-5 py-1">
              <TiTick className="mt-1 text-sky-500" />
              <p className="text-sm ">
                {props.cardList}&nbsp;Support & Maintenance
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
