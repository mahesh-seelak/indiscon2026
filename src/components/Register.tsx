import Image from "next/image";
import Link from "next/link";

export default function FeesPage() {
  const indianTableData = [
    [
      "Category",
      "IEEE Member",
      "Non-IEEE Member",
      "IEEE Member",
      "Non-IEEE Member",
    ],
    ["Industry/other person", "14,000", "15,000", "16,000", "17,000"],
    ["Academia", "12,000", "13,000", "14,000", "15,000"],
    ["Student", "7,500", "8,500", "8,500", "9,500"],
  ];

  const foreignTableData = [
    [
      "Category",
      "IEEE Member",
      "Non-IEEE Member",
      "IEEE Member",
      "Non-IEEE Member",
    ],
    ["Industry/other person", "220", "240", "250", "260"],
    ["Academia", "200", "220", "230", "240"],
    ["Student", "150", "170", "170", "190"],
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
        Registration Fees
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        {/* Desktop View */}
        <div className="hidden sm:block">
          <h2 className="text-xl text-center font-semibold text-blue-700 p-4 border-b border-blue-100">
            Indian Author (INR)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center"
                    rowSpan={2}
                  >
                    Category
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Early Bird (till{" "}
                    <span className="text-red-500 line-through">
                      15.06.2026
                    </span>{" "}
                    <span>30.06.2026</span>)
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Regular (till 15.07.2026)
                  </th>
                </tr>
                <tr>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    IEEE Member
                  </th>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    Non-IEEE Member
                  </th>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    IEEE Member
                  </th>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    Non-IEEE Member
                  </th>
                </tr>
              </thead>
              <tbody>
                {indianTableData.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`
                      ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"} 
                      hover:bg-blue-100 transition-colors duration-150
                    `}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 border-b border-blue-100 ${
                          cellIndex === 0
                            ? "font-semibold text-blue-800"
                            : "text-gray-700 text-center"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-center text-blue-700 p-4 border-b border-blue-100 mt-6">
            Foreign Author (USD)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center"
                    rowSpan={2}
                  >
                    Category
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Early Bird (till{" "}
                    <span className="text-red-500 line-through">
                      15.06.2026
                    </span>{" "}
                    <span>30.06.2026</span>)
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Regular (till 15.07.2026)
                  </th>
                </tr>
                <tr>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    IEEE Member
                  </th>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    Non-IEEE Member
                  </th>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    IEEE Member
                  </th>
                  <th className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 text-center border-l border-blue-400">
                    Non-IEEE Member
                  </th>
                </tr>
              </thead>
              <tbody>
                {foreignTableData.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`
                      ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"} 
                      hover:bg-blue-100 transition-colors duration-150
                    `}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 border-b border-blue-100 ${
                          cellIndex === 0
                            ? "font-semibold text-blue-800"
                            : "text-gray-700 text-center"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-3 text-center font-bold">
            Indian Author (INR)
          </div>
          {indianTableData.slice(1).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`p-4 border-b border-blue-100 ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"
              }`}
            >
              <h3 className="font-bold text-blue-800 mb-2">{row[0]}</h3>
              <div className="mb-3">
                <h4 className="font-semibold text-blue-700 mb-1">
                  {" "}
                  Early Bird (till{" "}
                  <span className="text-red-500 line-through">
                    15.06.2026
                  </span>{" "}
                  <span>30.06.2026</span>)
                </h4>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IEEE Member:</span>
                    <span className="font-medium text-gray-800">{row[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Non-IEEE Member:
                    </span>
                    <span className="font-medium text-gray-800">{row[2]}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-1">
                  Regular (till 15.07.2026):
                </h4>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IEEE Member:</span>
                    <span className="font-medium text-gray-800">{row[3]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Non-IEEE Member:
                    </span>
                    <span className="font-medium text-gray-800">{row[4]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-3 text-center font-bold mt-6">
            Foreign Author (USD)
          </div>
          {foreignTableData.slice(1).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`p-4 border-b border-blue-100 ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"
              }`}
            >
              <h3 className="font-bold text-blue-800 mb-2">{row[0]}</h3>
              <div className="mb-3">
                <h4 className="font-semibold text-blue-700 mb-1">
                  {" "}
                  Early Bird (till{" "}
                  <span className="text-red-500 line-through">
                    15.06.2026
                  </span>{" "}
                  <span>30.06.2026</span>)
                </h4>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IEEE Member:</span>
                    <span className="font-medium text-gray-800">{row[1]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Non-IEEE Member:
                    </span>
                    <span className="font-medium text-gray-800">{row[2]}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-1">
                  Regular (till 15.07.2026):
                </h4>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IEEE Member:</span>
                    <span className="font-medium text-gray-800">{row[3]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">
                      Non-IEEE Member:
                    </span>
                    <span className="font-medium text-gray-800">{row[4]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white  rounded-xl shadow-lg overflow-hidden mb-8 p-6">
        <h2 className="text-xl text-center font-bold text-blue-800 mb-4">
          {/* Registration Link:-https://forms.gle/JYEYiGLaeW2nwgF47 */}
          <Link href="https://forms.gle/JYEYiGLaeW2nwgF47">
            Click here to Register or scan the QR code below
          </Link>
        </h2>
        <div className="flex flex-col items-center">
          <Image
            src="/qrCode.jpg"
            alt="Additional Information"
            width={300}
            height={100}
            className="mb-4"
          />
          <p className="text-blue-600 font-semibold mb-4">
            For registration, please fill up the form after doing the necessary
            payment.
          </p>
        </div>
      </div>
      <div className="h-2 w-full"></div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Additional Information
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Charge per additional paper is 50% of the full registration fee
              (not valid for student registration)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Student registration is valid only for enrolled students in any
              program at least till the duration of conference (Studentship
              certificate duly signed by competent authority along with a valid
              Institute ID card must be produced/submitted)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-600">•</span>
            <span className="font-bold text-red-600 ">
              All registration fees are inclusive of 18% GST
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Extra Page charges will be applicable beyond 6 pages (up to 2
              additional pages). The extra page charge: ₹1200/page (for Indian
              Authors) and $25/page (for Foreign Authors)
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-red-600">•</span>
            <span className="font-bold text-red-600 ">
              Registration fees, once paid, is non-refundable.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Attendees who wish to register but do not have a paper can
              register at the non-author rate of Rs 3500/ USD 70 (including
              GST).
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Author registration fee includes- Registration kit, conference
              Lunch and Banquet Dinner.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Attendees who wish to register but do not have a paper /co-author
              of any registered article can register at the non-author rate of
              Rs 3500/ USD 70 (including GST).
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Rs. 2500 (including GST) will be charged for other accompanying persons.
            </span>
          </li>

          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Final Registration Deadline: 15.07.2026</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
