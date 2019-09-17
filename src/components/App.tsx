import React, { useState, useEffect } from 'react';
import socket from 'socket.io-client';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Landing } from './Landing';
import { Chat } from './Chat';

export const App: React.FC = () => {
    let [name, setName] = useState<string>('');

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => name.length ? <Redirect to='/chat' /> : <Landing setName={setName} />} />
                <Route path="/chat" render={() => <Chat name={name} />} />
            </Switch>
        </Router>
    );
};