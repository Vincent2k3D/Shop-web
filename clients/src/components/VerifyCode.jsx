import React from "react";

const VerifyCode = ({
  codeVerify,
  setCode,
  onVerify,
  onSwitchToLogin,
  error
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Verification
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter the 6-digit code sent to your email
        </p>

        <form className="space-y-8" onSubmit={onVerify}>
          <div className="flex justify-center text-amber-500">
            <input
              type="text"
              placeholder="Nhập mã xác thực"
              value={codeVerify}
              onChange={(e) => {
                setCode(e.target.value);
                console.log("Code entered:", e.target.value);
              }}
              className="border border-gray-300 rounded-md p-2 w-full text-center"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Didn't receive a code?
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Gửi lại
              </button>
            </p>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="space-y-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Xác thực
            </button>

            <button
              type="button"
              onClick={onSwitchToLogin}
              className="w-full bg-white text-gray-700 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Về login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
