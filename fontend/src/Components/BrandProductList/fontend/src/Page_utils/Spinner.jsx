// const Spinner = () => {
//   return (
//     <div className="spinner text-3xl m-auto">
//       <style>
//         {`
//             .spinner {
//               border: 4px solid rgba(0, 0, 0, 0.1);
//               width: 30px;
//               height: 30px;
//               border-radius: 50%;
//               border-left-color: #09f;
//               animation: spin .5s ease infinite;
//             }
  
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}
//       </style>
//     </div>
//   );
// };

// export { Spinner };



const Spinner = () => {
  return (
    <div className="spinner text-3xl m-auto">
      <style>
        {`
          .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 45px; /* Increased size for better visibility */
            height: 45px; /* Increased size for better visibility */
            border-radius: 50%;
            border-left-color: #09f;
            animation: spin 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite; /* Adjusted animation for smoothness */
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export { Spinner };

