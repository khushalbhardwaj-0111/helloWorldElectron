# Electron.js Notes

## How does Electron Work?

-   Electron uses Chromium, NodeJS and Custom APIs
-   Custom APIs for working with often-needed OS native functions.

### How Chrome Works?

-   There is a main process that you can say the main window of the app.

-   And the browser tabs can said a **Child Process** or **Renderer Processes** that shows a **Webpage**

-   the tabs _communicate_ with the other tab and the main app with an **Inter Process Communication Modules**

### Inter Process Communication (IPC)

-   this is a layer of which lets the main window and the child windows to communicate with each other back and forth

-   Electron is based on Chromium same as Google Chrome is..

-   Electron uses IPC to communicate with different _RenderProcess_

### Electron similar to WEB DEV

-   Electron can be compared with WEB Dev as we develop the body in the web dev in Electron that body extends to the **whole desktop window**

### History of Electron(Key towards learning it)

-   Made by **Github** to create **Atom** text editor.
-   Atom was created on electron because JavaScript is used more prominently and an Text-Editor based on JS can be easily extensible by other developers in open Source.

-   Companies using Electron are **VSCode**, **Slack**, **Discord**.

## Hello World

-   Create a new directory.
-   **Initialize node** in the dir by

    > npm init

-   Install electron via yarn or npm

    > yarn add electron
    > OR
    > npm i electron

-   Create an **index.js**, **index.html** file.

-   In the index.js write the following code
<!-- prettier-ignore-start -->

```
// app for managing apps lifecycle events.
// BrowserWindow to create a new BrowserWindow.

const { app, BrowserWindow } = require("electron");

// nodeIntegrations preferences allow the app to access all the node API.
function createWindow() {
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
    },
});

    win.loadFile("public/index.html");
}

// create a new BrowserWindow when electron app is initialized.
app.whenReady().then(createWindow);

// quits the app if there are no longer any windows.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
    app.quit();
    }
});

// activate window when the app has no window activated
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
}
});
```

<!-- prettier-ignore-end -->

-   In place of loadFile method we can use loadURL to load or display a specific path down there, for example to show [Google](https://www.google.com)

    ```
    win.loadURL("https://www.google.com/");
    ```

-   NOTE: in place of win.loadFile(filepath) we can use the file Protocol as

    ```
    win.loadURL(`file://${path.join(__dirname, filePath)}`);
    ```

-   In the index.html file create a boiler plate html file that you want to render.

-   In the _package.json_ file **App Name** and **Author** must be there.

-   Create a **Start script** as

    > electron .

-   **Launch** the app by the command
    > yarn start

## Architecture of Electron.js

-   **Electron App** is the one that **runs in the terminal** or you can say it as the server of our application.

-   Electron app **creates** a main window or the **App window**.

-   Inside the main window our **html** file is **rendered** just like in a web browser.
