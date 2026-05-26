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
    /* ["Industry/other person", "11,000", "13,000", "13,000", "15,000"], */
    ["Academia", "11,000", "13,000", "13,000", "15,000"],
    ["Attendee", "7000", "8000", "8000", "9000"],
  ];

  const foreignTableData = [
    [
      "Category",
      "IEEE Member",
      "Non-IEEE Member",
      "IEEE Member",
      "Non-IEEE Member",
    ],
   
    ["Academia", "350", "380", "380", "400"],
    ["Attendee", "250", "300", "350", "380"],
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
                   <span>05.07.2026</span>)
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Regular (till 30.07.2026)
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
                    
                    <span>05.07.2026</span>)
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center border-l border-blue-400"
                  >
                    Regular (till 30.07.2026)
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
                  {/* <span className="text-red-500 line-through">
                    15.06.2026
                  </span>{" "} */}
                  <span>05.07.2026</span>)
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
                  Regular (till 30.07.2026):
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
                 {/*  <span className="text-red-500 line-through">
                    15.06.2026
                  </span>{" "} */}
                  <span>05.07.2026</span>)
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
                  Regular (till 30.07.2026):
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
     {/*  <div className="bg-white  rounded-xl shadow-lg overflow-hidden mb-8 p-6">
        <h2 className="text-xl text-center font-bold text-blue-800 mb-4">
        
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
      </div> */}
      
      <div className="h-2 w-full"></div>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6">
       <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6">
   <div className="space-y-6 text-gray-700">
    
    {/* General Information */}
    <div>
      <h3 className="text-lg font-semibold text-red-700 mb-3">
        General Information
      </h3>

      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="mr-2 text-red-600">•</span>
          <span className="font-semibold text-red-600">
            The registration fee does not include 18% GST or any other taxes as
            applicable.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">•</span>
          <span>
            Note: Download the payment receipt. It will be required to fill the
            Google Form and a hard copy must be deposited at the conference
            venue.
          </span>
        </li>
      </ul>
    </div>

    {/* For Authors */}
    <div>
      <h3 className="text-lg font-semibold text-blue-700 mb-3">
        FOR AUTHORS
      </h3>

      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="mr-2">1.</span>
          <span>
            At least one author of every accepted paper must register for the
            conference as an author and present the paper for inclusion in the
            conference proceedings of IEEE INDISCON2026 and subsequent submission
            to IEEE Xplore Digital Library.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">2.</span>
          <span>
            If more than one author of an accepted paper wishes to attend the
            conference, all such authors must register separately by paying the
            applicable registration fee.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">3.</span>
          <span>
            Additional authors (other than those included in the manuscript
            submitted for review) cannot be added to the camera-ready paper.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">4.</span>
          <span>
            Registration fees are non-refundable and must be paid prior to
            uploading the final IEEE formatted camera-ready paper and
            e-copyright form.
          </span>
        </li>
      </ul>
    </div>

    {/* For Attendees */}
    <div>
      <h3 className="text-lg font-semibold text-green-700 mb-3">
        FOR ATTENDEES
      </h3>

      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="mr-2">1.</span>
          <span>
            All participants must register to attend IEEE INDISCON2026 by paying
            the requisite registration fee.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">2.</span>
          <span>
            The registration fee includes conference kit,
            access/admission to tutorials and technical sessions, lunch on all
            conference days, and morning/evening refreshments.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">3.</span>
          <span>
            The registration fee shown above is exclusive of all taxes and
            levies. Any payment gateway charges along with applicable taxes or
            levies shall be borne by the registrant.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">4.</span>
          <span>
            IEEE members must upload valid IEEE membership details during the
            online registration process if registering under the IEEE category.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">5.</span>
          <span>
            Students must upload a valid student ID card (front and back side)
            during the online registration process if registering under the
            student category.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">6.</span>
          <span>
            Please keep a copy of the transaction ID generated by the payment
            gateway and your bank for future payment tracking purposes.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">7.</span>
          <span>
            All correspondence regarding registration for IEEE INDISCON2026 should
            contain the Paper ID and registration confirmation number.
          </span>
        </li>

        <li className="flex items-start">
          <span className="mr-2">8.</span>
          <span>
            IEEE INDISCON2026, the organizing institute, IEEE India Council, and
            IEEE Rajasthan Sub-Section will not be responsible for any
            financial or other losses caused by improper online transactions.
            While all reasonable precautions have been taken to ensure secure
            transactions, registrants are responsible for safeguarding their
            user IDs, passwords, Paper IDs, and transaction details.
          </span>
        </li>
      </ul>
    </div>

    {/* No Show Policy */}
    <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-lg">
      <h3 className="text-lg font-bold text-red-700 mb-2">
        NO SHOW POLICY
      </h3>

      <p className="text-red-700 font-medium">
        Any accepted paper included in the final conference program must be
        presented by at least one author at the conference. Non-presented
        papers will not be submitted to the IEEE Xplore Digital Library as per
        IEEE no-show policy.
      </p>
    </div>

     {/* Deadline */}
    {/*<div className="border-t pt-4">
      <p className="font-semibold text-gray-800">
        Final Registration Deadline: 15.07.2026
      </p>
    </div> */}
  </div>
</div>
      </div>
    </div>
  );
}
