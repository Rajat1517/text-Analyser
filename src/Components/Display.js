function Display(props){

    return(
        <div id="display">
            <b><p style={{display: "inline-block", color: "grey"}}>{props.qty}</p></b> <br />
            <p style={{display: "inline-block"}}>{props.value}</p>
        </div>
    );
}

export default Display;