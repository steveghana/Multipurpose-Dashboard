import React, {useState, useRef} from 'react'
interface modalg {
  data: object[]; 
  currentPage:number;
  postperPage: number, 
  setCurrentPage:React.Dispatch<React.SetStateAction<number>>
 }
const GridModal:React.FC<modalg> = ({data, currentPage, postperPage, setCurrentPage})=>{
    const togRef = useRef<HTMLDivElement>(null);
  
    const [modalNums, setmodalNums] = useState(0);
    // const indexOflastPost = currentPage * postperPage;
    // const indexOfFirstPost = indexOflastPost - postperPage;
    // const currentPost = data.slice(indexOfFirstPost, indexOflastPost);
    let arrOfNums= []
    for (let i = 1; i <= Math.ceil(data.length / postperPage); i++) {
      arrOfNums.push(i);
    }
    const toggleModal = (i: number) => {
        setCurrentPage(i + 1);
        if (togRef.current != null) {
          const elArrays = togRef?.current?.querySelectorAll<HTMLElement>(".num");
          elArrays.forEach((item) => {
            item.style.background = "none";
            item.style.color = "black";
          });
          elArrays[i].style.background = "red";
          elArrays[i].style.color = "white";
        }
      };
    return(
        <div ref={togRef} className="numbs">
          {arrOfNums.map((num, i) => (
            <div
              onClick={() => toggleModal(i)}
              style={{
                background: i === modalNums ? "red" : "white",
              }}
              className="num"
            >
              {num}
            </div>
          ))}
        </div>
    )
}
export default GridModal