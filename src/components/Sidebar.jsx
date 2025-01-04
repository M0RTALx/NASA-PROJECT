// export default function Sidebar(){
//     return(
//         <div>

//         </div>
//     )
// }


function Sidebar(props){
    const{ handleToggleModal ,data}=props
    return(
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">

            <h2>{data?.title}</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle">{data?.data}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-right-long fa-xl"></i>
            </button>
            </div>
{/* ggggggggggggggggggggggggggg */}
        </div>
    );
}



export default Sidebar