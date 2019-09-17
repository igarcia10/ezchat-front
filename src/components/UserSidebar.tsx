import React from 'react';
import { User } from '../models/User';

interface Props {
    users: User[]
}

export const UserSidebar: React.FC<Props> = ({ users }) => {
    return (
        <div>
            <ul>
                {users.map((u, i) => (<li key={i}>{u.name}</li>))}
            </ul>
        </div>
    );
}