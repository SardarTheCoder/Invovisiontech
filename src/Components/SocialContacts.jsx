import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
export const SocialContacts = () => {
  return (
    <div className="myShadow fixed top-[200px] bg-blue-800  rounded-[5px] w-[40px] h-[280px] px-1 z-10">
      <ul className="flex flex-col text-white  ">
        <li className="px-2 py-5 border-slate-500  border-b-[1px] ">
          <a href="https://www.facebook.com/invovision" target="_blank">
            <GrFacebookOption className="hover:text-blue-500 transform hover:scale-90 transition duration-300 ease-in-out" />
          </a>
        </li>
        <li className="px-2 py-5 border-slate-500 border-b-[1px]">
          <a
            href="https://www.linkedin.com/company/invovision"
            target="_blank"
          >
            <GrLinkedinOption className="hover:text-blue-500 transform hover:scale-90 transition duration-300 ease-in-out" />
          </a>
        </li>
        <li className="px-2 py-5 border-slate-500 border-b-[1px]">
          <a
            href="https://www.instagram.com/invovision"
            target="_blank"
          >
            <GrInstagram className="hover:text-blue-500 transform hover:scale-90 transition duration-300 ease-in-out" />
          </a>
        </li>
        <li className="px-2 py-5 border-slate-500 border-b-[1px]">
          <a href="https://twitter.com/invovision" target="_blank">
            <GrTwitter className="hover:text-blue-500 transform hover:scale-90 transition duration-300 ease-in-out" />
          </a>
        </li>
        <li className="px-2 py-5 ">
          <a href="https://www.youtube.com/invovision">
            <GrYoutube className="hover:text-blue-500 transform hover:scale-90 transition duration-300 ease-in-out" />
          </a>
        </li>
      </ul>
    </div>
  );
};
