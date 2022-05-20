import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/yeoman2Tab/index.html")
@PreventIframe("/yeoman2Tab/config.html")
@PreventIframe("/yeoman2Tab/remove.html")
export class Yeoman2Tab {
}
