export class Link {
  set visible(value: boolean) {
    this._visible = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  get styleClass(): string {
    return this._styleClass;
  }

  get icon(): string {
    return this._icon;
  }

  get urlLink(): string {
    return this._urlLink;
  }

  get nameLink(): string {
    return this._nameLink;
  }

  private _nameLink: string;
  private _urlLink: string;
  private _styleClass: string;
  private _icon: string;
  private _visible: boolean;

  constructor(name: string, urlLink: string, icon: string, styleClass: string, visible: boolean) {
    this._nameLink   = name;
    this._urlLink    = urlLink;
    this._styleClass = styleClass;
    this._icon       = icon;
    this._visible    = visible;
  }
}
