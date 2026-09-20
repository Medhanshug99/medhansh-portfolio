import { FiFileText, FiDownload, FiExternalLink } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/lightswind/dialog";

const ResumeDialog = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md bg-neutral-100/95 dark:bg-neutral-800/95 border-neutral-300 dark:border-neutral-700">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
            Choose a resume
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* SDE Resume */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                <FiFileText size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  Software Engineer (SDE) Resume
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Backend & full-stack · Node.js, TypeScript, WebSockets, SQL
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-1">
              <a
                href="/resume/Medhansh_Poojari_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
              >
                <FiExternalLink size={16} /> View
              </a>
              <a
                href="/resume/Medhansh_Poojari_SDE_Resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-md transition-colors"
              >
                <FiDownload size={16} /> Download
              </a>
            </div>
          </div>

          {/* ML / AI Resume */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                <BsRobot size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                  ML / AI Engineer Resume
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  LLM pipelines · Document AI · Model evaluation · PyTorch
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-1">
              <a
                href="/resume/Medhansh_Poojari_ML_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
              >
                <FiExternalLink size={16} /> View
              </a>
              <a
                href="/resume/Medhansh_Poojari_ML_Resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-md transition-colors"
              >
                <FiDownload size={16} /> Download
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeDialog;
