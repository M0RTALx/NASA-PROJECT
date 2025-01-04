// export default function Footer() {
//     return(
//         <footer></footer>
//     )
// }



function Footer(props){

    const{showModal,handleToggleModal,data}= props
    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
            </button>
            {/* <p>&copy; ss MORTAL </p> */}
        </footer>
    );
}



export default Footer