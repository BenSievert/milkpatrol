import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function QAndA({ question, answer }: { question: string; answer: string }) {
  return (
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="border border-b-blue-300 flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
              {question}
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-blue-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  );
}

export default QAndA;
