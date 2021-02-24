# Electron.js Notes

## How does Electorn Work?

- Electron uses Chromium, NodeJS and Custom APIs
- Custom APIs for working with often-needed OS native functions.

## How Chrome Works?

- There is a main process that you can say the main window of the app.

- And the borwser tabs can said a **Child Process** or **Renderer Processes** that shows a **Webpage**

- the tabs _communicate_ with the other tab and the main app with an **Inter Process Communication Modules**

### Inter Process Communication (IPC)

- this is a layer of which lets the main window and the child windows to communicate with each other back and forth

- Electron is based on Chromium same as Google Chrome is..

- Electron uses IPC to communicate with different _RenderProcess_

### Electron similar to WEB

- Electron can be comapred with WEB Dev as we develop the body in the web dev in Electron that body extends to the **whole dektop window**
