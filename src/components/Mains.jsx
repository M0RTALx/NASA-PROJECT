// export default function Main(){
//     return(
//         <div>
            
//         </div>
//     )
// }





function Main(props){
    const{data}= props
    return(
        <div className="imgContainer">
            <img src={data.hdurl} alt={data.title ||"bg-img"} className="bgImage"></img>
        </div>
    );
}



export default Main