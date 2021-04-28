// function createAnalytics():object {
//   let counter = 0;
//   let isDestroyed = false;
//   const listener = ():number => counter++;
//   document.addEventListener("click", listener);
//   return {
//     destroy() {
//       document.removeEventListener("click", listener);
//       isDestroyed=true;
//     },
//     getClicks() {
//         if(isDestroyed){
//             return "Analytics is destoyed"
//         }
//       return counter;
//     },
//   };
// }

// window['analytics'] = createAnalytics();



const analytics = () => {

  interface Props {
    name:string;
    label:string;
    value:number
  }
  return 55
}

export default analytics
