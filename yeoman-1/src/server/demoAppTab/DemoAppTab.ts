import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/demoAppTab/index.html")
@PreventIframe("/demoAppTab/config.html")
@PreventIframe("/demoAppTab/remove.html")
export class DemoAppTab {
}
