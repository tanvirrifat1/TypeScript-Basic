import React from 'react';

type UserDemoProps={
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}

const UserDemo = ({users}:UserDemoProps) => {
    return (
        <div style={{border:"1px solid", margin:"0.10rem",backgroundColor:'goldenrod'}}>
          {users.map((user)=>{
            const {id,name,email,age}=user
            return <div key={id}>
             <h3>{name}</h3>
             <p>{email}</p>
             <p>{age}</p>
                </div>
          })}
        </div>
    );
};

export default UserDemo;