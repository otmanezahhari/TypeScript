interface PersonType {
    name :{
        first : string;
        last : string;
    }
}

export const PersonObject = ({name} : PersonType)=>(
    <div>
        <h1>Hi {name.first}</h1>
        <h2>{name.last}</h2>
    </div>
)