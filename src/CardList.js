import React from "react";
import Card from "./Card";

const CardList=({Data})=>{
    return(<div>
        {Data.map((user,i)=>{
            return(<Card id={Data[i].id}
                    name={Data[i].name}
                    profession={Data[i].profession}/>)
        }
        )}
    </div>
    )
}

export default CardList;