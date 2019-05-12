"use strict";

const express = require("express");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fileSystem = require("fs");
const open = require("open");
const os = require("os");
const path = require("path");
const { promisify } = require("util");

const writeFile = promisify(fileSystem.writeFile);
let server = express();
const port = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname, "/../../build")));

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../../build/index.html"));
});

const startServer = function() {
    server = server.listen(port, () => {
        console.log(`server listening on port: ${port}`);
    });
};

const stopServer = function() {
    server.close(() => console.log("stoping server"));
};

async function launchChromeAndRunLighthouse(url, opts, config = null) {
    const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
    opts.port = chrome.port;
    const result = await lighthouse(url, opts, config);
    await chrome.kill();
    return result;
}

(async () => {
    startServer();

    const opts = { chromeFlags: ["--show-paint-rects"] };

    const settings = {
        extends: "lighthouse:default",
        settings: {
            output: "html"
        }
    };

    let result;

    try {
        result = await launchChromeAndRunLighthouse(`http://localhost:${port}`, opts, settings);
    } catch (error) {
        stopServer();
        throw error;
    }

    await writeFile("./reports/lighthouse-report.html", result.report);
    stopServer();
    openReportFile();
})();

async function openReportFile() {
    await open("./reports/lighthouse-report.html", getOpenFileConfiguration());
}

function getOpenFileConfiguration() {
    const browserName = getBrowserName();
    return { app: browserName };
}

function getBrowserName() {
    let browserName = "firefox";
    const operativeSystem = os.platform();

    if (operativeSystem === "linux") {
        browserName = "google-chrome";
    } else if (operativeSystem === "win32") {
        browserName = "chrome";
    }
    return browserName;
}
