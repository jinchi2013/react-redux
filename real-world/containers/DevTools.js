/**
 * Created by 9cjin on 8/5/16.
 */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonittor from 'redux-devtools-dock-monitor';

export default createDevTools(
    <DockMonittor toggleVisibilityKey="ctrl-h"
                    changePositionKey="ctrl-w">
        <LogMonitor/>
    </DockMonittor>
)
