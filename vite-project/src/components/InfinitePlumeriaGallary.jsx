// "use client";

// import { cn } from "../components/utils/movingCards";
// import React, { useEffect, useState } from "react";

// export const InfiniteMovingCards = ({
//   items,
//   direction = "left",
//   speed = "fast",
//   pauseOnHover = true,
//   className,
// }) => {
//   const containerRef = React.useRef(null);
//   const scrollerRef = React.useRef(null);

//   useEffect(() => {
//     addAnimation();
//   }, []);
//   const [start, setStart] = useState(false);
//   function addAnimation() {
//     if (containerRef.current && scrollerRef.current) {
//       const scrollerContent = Array.from(scrollerRef.current.children);

//       scrollerContent.forEach((item) => {
//         const duplicatedItem = item.cloneNode(true);
//         if (scrollerRef.current) {
//           scrollerRef.current.appendChild(duplicatedItem);
//         }
//       });

//       getDirection();
//       getSpeed();
//       setStart(true);
//     }
//   }
//   const getDirection = () => {
//     if (containerRef.current) {
//       if (direction === "left") {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "forwards"
//         );
//       } else {
//         containerRef.current.style.setProperty(
//           "--animation-direction",
//           "reverse"
//         );
//       }
//     }
//   };
//   const getSpeed = () => {
//     if (containerRef.current) {
//       if (speed === "fast") {
//         containerRef.current.style.setProperty("--animation-duration", "20s");
//       } else if (speed === "normal") {
//         containerRef.current.style.setProperty("--animation-duration", "40s");
//       } else {
//         containerRef.current.style.setProperty("--animation-duration", "80s");
//       }
//     }
//   };
//   return (
//     <div
//       ref={containerRef}
//       className={cn(
//         "scroller relative z-20  max-w-7xl overflow-hidden",
//         className
//       )}
//       style={{maxWidth:"inherit"}}
//     >
//       <ul
//         ref={scrollerRef}
//         className={cn(
//           " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
//           start && "animate-scroll ",
//           pauseOnHover && "hover:[animation-play-state:paused]"
//         )}
//       >
//         {items.map((item, idx) => (
//           <li
//             className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-10 md:w-[450px]"
//             style={{
//               background: "linear-gradient(180deg, #FFFFFF, #F8F9FA)",
//               color: "#000000", // Text color black
//             }}
//             key={idx}
//           >
//             <img
//               src={item.image}
//               alt={item.alt}
//               className="w-full h-[200px] object-cover rounded-xl"
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
"use client";
import '../components/plumeriaGal.css'
import { cn } from "../components/utils/movingCards";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left", // Default: left
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate elements for infinite scrolling effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      applyDirection();
      applySpeed();
      setStart(true);
    }
  }

  function applyDirection() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "right" ? "reverse" : "forwards"
      );
    }
  }

  function applySpeed() {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
        default:
          duration = "80s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
      style={{ maxWidth: "inherit" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-2 flex-shrink-0 border-slate-700 px-8 py-10 md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, #FFFFFF, #F8F9FA)",
              color: "#000000",
            }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-[200px] object-cover rounded-xl"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
