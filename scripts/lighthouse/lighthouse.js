'use strict';

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fileSystem = require('fs');
const open = require('open');
const os = require('os');
const { promisify } = require('util');

const { port } = require('./config');
const { startServer, stopServer } = require('./server');

const REPORT_PATH = './reports/lighthouse-report.html';
const writeFile = promisify(fileSystem.writeFile);

async function init() {
    startServer();
    let result;
    const { opts, settings } = getLightHouseConfig();

    try {
        result = await launchChromeAndRunLighthouse(`http://localhost:${port}`, opts, settings);
    } catch (error) {
        stopServer();
        throw error;
    }

    await writeFile(REPORT_PATH, result.report);
    stopServer();
    openReportFile();
}

function getLightHouseConfig() {
    const opts = { chromeFlags: ['--show-paint-rects'] };

    const settings = {
        extends: 'lighthouse:default',
        settings: {
            output: 'html',
        },
    };
    return { opts, settings };
}

async function launchChromeAndRunLighthouse(url, opts, config = null) {
    const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
    opts.port = chrome.port;
    const result = await lighthouse(url, opts, config);
    await chrome.kill();
    return result;
}

async function openReportFile() {
    await open(REPORT_PATH, getOpenFileConfiguration());
}

function getOpenFileConfiguration() {
    const browserName = getBrowserName();
    return { app: browserName };
}

function getBrowserName() {
    let browserName = 'firefox';
    const operativeSystem = os.platform();

    if (operativeSystem === 'linux') {
        browserName = 'google-chrome';
    } else if (operativeSystem === 'win32') {
        browserName = 'chrome';
    }
    return browserName;
}

init();
