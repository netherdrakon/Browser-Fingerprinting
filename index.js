function getDevicePixelRatio() {
    return window.devicePixelRatio;
}
  
function getUserAgent() {
    return navigator.userAgent;
}
  
function getPlatform() {
    return navigator.platform;
}
  
function getPlugins() {
    return Array.from(navigator.plugins)
      .map((plugin) => `${plugin.name} - ${plugin.filename}`)
      .join(", ");
}
  
async function getHeaders() {
    let response = await fetch("https://httpbin.org/headers");
    let { headers } = await response.json();
    return ["Accept", "Accept-Encoding", "Accept-Language", "User-Agent"]
      .map((key) => `${key}: ${headers[key]}`)
      .join("\n");
}
  
function getDateFormat() {
    return new Date(0).toString();
}

async function getBatteryLevel() {
    return navigator.getBattery().then((battery) => battery.level);
}

async function getBatteryCharging() {
    return navigator.getBattery().then((battery) => battery.charging);
}

async function runCatching(f) {
    try {
      return await f();
    } catch {
      return null;
    }
}

export async function computeComponents() {
    return {
      devicePixelRatio: await runCatching(getDevicePixelRatio),
      userAgent: await runCatching(getUserAgent),
      platform: await runCatching(getPlatform),
      plugins: await runCatching(getPlugins),
      headers: await runCatching(getHeaders),
      dateFormat: await runCatching(getDateFormat),
      batteryCharging: await runCatching(getBatteryCharging),
      batteryLevel: await runCatching(getBatteryLevel),
    };
  }





