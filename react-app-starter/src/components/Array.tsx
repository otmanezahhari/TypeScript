interface ArrayTypes {
    liste : {
        first : string;
        last : string;
    }[]
}

export const Array = ({liste} : ArrayTypes ) => (
    <div>
        <h1>Hello from Array</h1>
        {liste.map(item =>(
            <h1>{item.first} {item.last}</h1>
        ))}
    </div>
)