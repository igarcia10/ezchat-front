import React, { useState } from 'react';

interface Props {
    setName: (name: string) => void
}

export const Landing: React.FC<Props> = ({ setName }) => {
    const [text, setText] = useState<string>('');

    return (<div>
        <h1>Enter your username:</h1>
        <input type="text"
            value={text}
            onChange={e => setText(e.target.value)} />
        <button onClick={() => setName(text)} disabled={!text.length}>Send</button>
    </div>);
}