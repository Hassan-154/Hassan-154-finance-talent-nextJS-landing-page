import React from 'react'

function AccountChat() {
    return (
        <div className="flex items-center justify-center p-4">
            <div className="space-y-4">
                {/* Top Card: Job Listing */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <span className="bg-[#00BC7D] text-white text-xs font-semibold px-3.5 py-1.5 rounded-md">High Match</span>
                    <h2 className="text-xl font-semibold text-gray-900 mt-4">Senior Accountant</h2>
                    <p className="text-gray-600 mt-2">Anywhere • Full Time</p>
                    <p className="text-gray-600 mt-1">5 years experience</p>
                    <p className="text-gray-600 mt-1">Financial Reporting, Excel</p>
                    {/* Job details will go here */}
                </div>
            </div>
            <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-700 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-1 bg-white rounded-full mb-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Chat</h1>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="p-6 min-h-[400px] flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Hello Henry...</h2>
          </div>

          {/* Message Input Area */}
          <div className="space-y-4">
            <div className="relative">
              <div className="w-full p-4 border border-gray-300 rounded-2xl min-h-[120px] flex items-start">
                <span className="text-gray-500">Write a message</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 text-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default AccountChat