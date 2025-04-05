import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithubAlt,
  FaLinkedinIn,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Messagebar = () => {
  return (
    <div className=" w-full">
      <form
        className="flex flex-col justify-between bg-accent rounded-lg p-4 w-full h-24"
        action=""
      >
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Talk to Jacob..."
        />

        <div className="w-full flex justify-between ">
          <div className="flex justify-center items-center gap-2">
            <a
              className="flex justify-center items-center bg-dark font-bold w-8 h-8 font-sans rounded-full"
              href="https://www.linkedin.com/in/fujacob/"
              target="_blank"
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full"
              href="https://www.linkedin.com/in/fujacob/"
              target="_blank"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full"
              href="https://www.linkedin.com/in/fujacob/"
              target="_blank"
            >
              <FaTwitter className="text-lg" />
            </a>

            <a
              className="flex justify-center items-center font-bold bg-dark w-8 h-8 font-sans rounded-full"
              href="https://www.linkedin.com/in/fujacob/"
              target="_blank"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
          <input
            className="rounded-xl w-8 h-8 bg-red-600"
            type="submit"
            value="^"
          />
        </div>
      </form>
    </div>
  );
};

export default Messagebar;
