type StatusPropsTypes = {
    status : "ok" | "nok";
}

export const Status = ({status} : StatusPropsTypes) =>{
    let message;
    if( status === "ok" ){
        message = "ok"
    }else if(status === "nok"){
        message = "nok"
    }
    return(
        <div>
            <h1>{message}</h1>
            
        </div>
    )
}