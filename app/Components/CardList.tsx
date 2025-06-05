export default function CardList() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <a
          href="/frontend-performance"
          className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
        >
          <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
            Frontend Performance
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            Detailed list of best practices to improve your frontend performance
          </span>
        </a>
        <a
          href="/api-security"
          className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
        >
          <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
            API Security
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            Detailed list of best practices to make your APIs secure
          </span>
        </a>
        <a
          href="/code-review"
          className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
        >
          <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
            Code Reviews
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            Detailed list of best practices for effective code reviews and
            quality
          </span>
        </a>
        <a
          href="/aws"
          className="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
        >
          <span className="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
            AWS
          </span>
          <span className="text-sm leading-normal text-gray-400 sm:block">
            Detailed list of best practices for Amazon Web Services (AWS)
          </span>
        </a>
      </div>
    </>
  );
}
