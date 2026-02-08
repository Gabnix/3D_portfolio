const Alert = ({ type, text }) => {
  return (
    <div className='fixed top-20 left-0 right-0 flex justify-center items-center z-50 px-4'>
      <div
        className={`p-3 sm:p-4 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } items-center text-white leading-none rounded-lg sm:rounded-full flex shadow-lg backdrop-blur-sm max-w-md w-full sm:w-auto`}
        role='alert'
        style={{ animation: 'slideDown 0.3s ease-out' }}
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-bold mr-3 flex-shrink-0`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left text-sm sm:text-base flex-1'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
