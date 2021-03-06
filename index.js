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
