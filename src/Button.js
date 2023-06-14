export default function Button(props){

    const hold={backgroundColor: props.col, 
                padding: "1%", 
                marginRight:"4px",
                marginTop:"4px",
                border: "none",
                borderRadius: "5%",
                cursor:"pointer"
            };

    return(
        <button onClick={props.f} style={hold}>{props.name}</button>
    );
}