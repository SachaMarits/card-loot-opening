export default function Spinner({ className = "", color = "white", size = "sm" }) {
   const sizeInPx = () => {
      switch (size) {
         case "lg":
            return 64;
         case "md":
            return 48;
         case "sm":
            return 32;
         case "xs":
            return 16;
         default:
            return 32;
      }
   };

   return (
      <svg
         className={`spinner ${className}`}
         style={{ height: sizeInPx(), width: sizeInPx() }}
         viewBox="0 0 66 66"
         xmlns="http://www.w3.org/2000/svg"
      >
         <circle
            className={`path`}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="30"
         />
      </svg>
   );
}