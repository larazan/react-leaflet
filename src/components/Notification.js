import React, { useState } from 'react'

const Notification = ({ type, title, msg }) => {
    const [showNotif, setShowNotif] = useState(true)

    const closeNotif = () => {
        console.log("notif close!");
        setShowNotif((prev) => !prev);
    };
    
    let notifColor = ''
    let notifBg = ''
    const notifLogo = (type) =>
    { 
        if (type === 'success') {
            return (
                <svg className="w-8 h-8 text-white" viewBox="0 0 1792 1792" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                </svg>
            )
        } else if(type === 'normal') {
            return (
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            )
        } else if(type === 'alert') {
            return (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            )
        } else if(type === 'danger') {
            return (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            )
        } else if(type === 'info') {
            return (
                <svg class="w-8 h-8 inline text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            )
        }
        
    }
    switch (type) {
      case "success":
        notifColor = "text-white";
        notifBg = "bg-green-600";
        break;
      case "normal":
        notifColor = "text-gray-900";
        notifBg = "bg-gray-200";
        break;
      case "alert":
        notifColor = "text-white";
        notifBg = "bg-orange-600";
        break;
      case "danger":
        notifColor = "text-white";
        notifBg = "bg-red-600";
        break;
        case "info":
        notifColor = "text-white";
        notifBg = "bg-blue-700";
        break;
    }

  return (
    <>
      {showNotif ? (
        <div
          className={`relative2 ${notifBg} rounded-lg border-gray-300 border p-2 m-1.5 shadow-lg`}
        >
          {/* <div className="absolute relative2 top-2 right-2">
            <button className={`${notifColor}`} onClick={closeNotif}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
          <div className="flex flex-row">
            <div className={`px-2 `}>
              {notifLogo(type)}
            </div>

            <div className={`ml-2 mr-2 ${notifColor}`}>
              <span className="font-semibold">{title}</span>
              <span className={`block text-sm ${notifColor}`}>{msg}</span>
            </div>

            <button className={`${notifColor} flex`} onClick={closeNotif}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Notification