/***********************************************************************
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {UserContextProvider} from './contexts/UserContext'

ReactDOM.render(
    <React.StrictMode>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
