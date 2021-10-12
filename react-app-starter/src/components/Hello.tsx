
//Type Declare New Type
// type HelloProps = {
//     name : string;
// }

//Interface : create object with an inferred type

interface HelloProps {
    name : string;
    id : number,
}


// export const Hello = (props : HelloProps)=>{
//     return(
//         <div>
//             <h1>Hello {props.name} Welcom to our website {props.id} </h1>
//         </div>
//     )
// }

export const Hello = ({name , id} : HelloProps)=>{
    return(
        <div>
            <h1>Hello {name} Welcom to our website {id} </h1>
        </div>
    )
}