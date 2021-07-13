/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Crumb } from "./components/modus-breadcrumb/modus-breadcrumb";
export namespace Components {
    interface ModusAccordion {
    }
    interface ModusAccordionItem {
        /**
          * (optional) Disables the accordion item, locks expand/collapse.
         */
        "disabled": boolean;
        /**
          * (optional) Whether the accordion item is expanded.
         */
        "expanded": boolean;
        /**
          * (required) The text to render in the header.
         */
        "headerText": string;
        /**
          * (optional) The size of accordion item.
         */
        "size": 'condensed' | 'standard';
    }
    interface ModusAlert {
        /**
          * (optional) Whether the alert has a dismiss button
         */
        "dismissible": boolean;
        /**
          * (optional) The alert message
         */
        "message": string;
        /**
          * (optional) The type of alert, sets the color and icon to render
         */
        "type": 'error' | 'info' | 'info-gray' | 'info-gray-dark' | 'success' | 'warning';
    }
    interface ModusBadge {
        /**
          * (optional) The color of the badge
         */
        "color": 'danger' | 'dark' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
        /**
          * (optional) The size of the badge
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * (optional) The type of the badge
         */
        "type": 'counter' | 'default' | 'text';
    }
    interface ModusBreadcrumb {
        /**
          * The breadcrumbs to render.
         */
        "crumbs": Crumb[];
    }
    interface ModusButton {
        /**
          * (optional) The style of the button
         */
        "buttonStyle": 'borderless' | 'fill' | 'outline';
        /**
          * (optional) The color of the button.
         */
        "color": 'danger' | 'default' | 'primary' | 'secondary' | 'warning';
        /**
          * (optional) Disables the button.
         */
        "disabled": boolean;
        /**
          * (optional) The size of the button.
         */
        "size": 'small' | 'medium' | 'large';
    }
    interface ModusCard {
        /**
          * (optional) The height of the card.
         */
        "height": string;
        /**
          * (optional) The width of the card.
         */
        "width": string;
    }
    interface ModusCheckbox {
        /**
          * (optional) Whether the checkbox is checked.
         */
        "checked": boolean;
        /**
          * (optional) Whether the checkbox is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The checkbox label.
         */
        "label": string;
        /**
          * (optional) The size of the button
         */
        "size": 'small' | 'medium';
    }
    interface ModusChip {
        /**
          * (optional) The chip's style.
         */
        "chipStyle": 'outline' | 'solid';
        /**
          * (optional) Whether the chip is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) Whether the chip has an error.
         */
        "hasError": boolean;
        /**
          * (optional) The image's url.
         */
        "imageUrl": string;
        /**
          * (optional) Whether to show the checkmark.
         */
        "showCheckmark": boolean;
        /**
          * (optional) Whether to show the close icon.
         */
        "showClose": boolean;
        /**
          * (optional) The chip's size.
         */
        "size": 'medium' | 'large';
        /**
          * (optional) The chip's value.
         */
        "value": string;
    }
    interface ModusDialog {
        /**
          * (optional) The text to display in the header.
         */
        "headerText": string;
        /**
          * (optional) The text to display in the primary button.
         */
        "primaryButtonText": string;
        /**
          * (optional) The text to display in the secondary button.
         */
        "secondaryButtonText": string;
        /**
          * (optional) Whether to show the secondary button.
         */
        "showSecondaryButton": boolean;
        /**
          * (optional) Whether to show the dialog.
         */
        "visible": boolean;
    }
    interface ModusDropdown {
        /**
          * (optional) Disables the dropdown
         */
        "disabled": boolean;
        /**
          * (optional) The placement of the dropdown in related to the toggleElement
         */
        "placement": 'top' | 'right' | 'bottom' | 'left';
        /**
          * (required) The element id that the list renders near and that triggers the toggling of the list
         */
        "toggleElementId": string;
    }
    interface ModusList {
    }
    interface ModusListItem {
        /**
          * (optional) Disables the list item
         */
        "disabled": boolean;
        /**
          * (optional) The selected state of the list item
         */
        "selected": boolean;
        /**
          * (optional) The size of list item
         */
        "size": 'condensed' | 'standard';
        /**
          * (optional) The type of list item
         */
        "type": 'standard';
    }
    interface ModusNavbar {
        /**
          * (required) Product logo options.
         */
        "productLogoOptions": { url: string };
        /**
          * (required) Profile menu options.
         */
        "profileMenuOptions": { avatarUrl?: string, email?: string, initials?: string, username: string };
        /**
          * (optional) Whether to show the apps menu.
         */
        "showAppsMenu": boolean;
        /**
          * (optional) Whether to show the help menu.
         */
        "showHelpMenu": boolean;
        /**
          * (optional) Whether to show the main menu.
         */
        "showMainMenu": boolean;
        /**
          * (optional) Whether to show notifications.
         */
        "showNotifications": boolean;
        /**
          * (optional) Whether to show search.
         */
        "showSearch": boolean;
    }
    interface ModusNavbarProfileMenu {
        "avatarUrl": string;
        "email": string;
        "initials": string;
        "username": string;
    }
    interface ModusNumberInput {
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The input's error state text.
         */
        "errorText": string;
        /**
          * (optional) The input's helper text displayed below the input.
         */
        "helperText": string;
        /**
          * (optional) The input's label.
         */
        "label": string;
        /**
          * (optional) The input's maximum value.
         */
        "maxValue": number;
        /**
          * (optional) The input's minimum value.
         */
        "minValue": number;
        /**
          * (optional) The input's placeholder text.
         */
        "placeholder": string;
        /**
          * (optional) Whether the input's content is read-only
         */
        "readOnly": boolean;
        /**
          * (optional) Whether the input is required.
         */
        "required": boolean;
        /**
          * (optional) The input's size.
         */
        "size": 'medium' | 'large';
        /**
          * (optional) The input's step.
         */
        "step": number;
        /**
          * (optional) The input's valid state text.
         */
        "validText": string;
        /**
          * (optional) The input's value.
         */
        "value": string;
    }
    interface ModusProgressBar {
        /**
          * (optional) The progress bar's background color.
         */
        "backgroundColor": string;
        /**
          * (optional) The progress bar's foreground color.
         */
        "color": string;
        /**
          * (optional) The progress bar's maximum value.
         */
        "maxValue": number;
        /**
          * (optional) The progress bar's minimum value.
         */
        "minValue": number;
        /**
          * (optional) The text displayed on the progress bar.
         */
        "text": string;
        /**
          * (optional) The progress bar's text color.
         */
        "textColor": string;
        /**
          * (optional) The progress bar's value.
         */
        "value": number;
    }
    interface ModusSelect {
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The input's error text.
         */
        "errorText": string;
        /**
          * (optional) The input's helper text.
         */
        "helperText": string;
        /**
          * (optional) The input label.
         */
        "label": string;
        /**
          * The options for the dropdown list.
         */
        "options": unknown[];
        /**
          * The options property to render in the dropdown list.
         */
        "optionsDisplayProp": string;
        /**
          * (optional) Whether the input is required.
         */
        "required": boolean;
        /**
          * (optional) The input's size.
         */
        "size": 'medium' | 'large';
        /**
          * (optional) The input's valid text.
         */
        "validText": string;
        /**
          * (optional) The input value.
         */
        "value": unknown;
    }
    interface ModusSpinner {
        /**
          * (optional) The color of the spinner in hex format (eg #FFFFFF)
         */
        "color": string;
        /**
          * (optional) The size of the spinner, will be applied to both the height and width
         */
        "size": string;
    }
    interface ModusTextInput {
        /**
          * (optional) Whether the input has a clear button.
         */
        "clearable": boolean;
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The input's error state text.
         */
        "errorText": string;
        /**
          * (optional) The input's helper text displayed below the input.
         */
        "helperText": string;
        /**
          * (optional) Whether the search icon is included.
         */
        "includeSearchIcon": boolean;
        /**
          * (optional) The input's label.
         */
        "label": string;
        /**
          * (optional) The input's maximum length.
         */
        "maxLength": number;
        /**
          * (optional) The input's minimum length.
         */
        "minLength": number;
        /**
          * (optional) The input's placeholder text.
         */
        "placeholder": string;
        /**
          * (optional) Whether the input's content is read-only
         */
        "readOnly": boolean;
        /**
          * (optional) Whether the input is required.
         */
        "required": boolean;
        /**
          * (optional) The input's size.
         */
        "size": 'medium' | 'large';
        /**
          * (optional) The input's valid state text.
         */
        "validText": string;
        /**
          * (optional) The input's value.
         */
        "value": string;
    }
}
declare global {
    interface HTMLModusAccordionElement extends Components.ModusAccordion, HTMLStencilElement {
    }
    var HTMLModusAccordionElement: {
        prototype: HTMLModusAccordionElement;
        new (): HTMLModusAccordionElement;
    };
    interface HTMLModusAccordionItemElement extends Components.ModusAccordionItem, HTMLStencilElement {
    }
    var HTMLModusAccordionItemElement: {
        prototype: HTMLModusAccordionItemElement;
        new (): HTMLModusAccordionItemElement;
    };
    interface HTMLModusAlertElement extends Components.ModusAlert, HTMLStencilElement {
    }
    var HTMLModusAlertElement: {
        prototype: HTMLModusAlertElement;
        new (): HTMLModusAlertElement;
    };
    interface HTMLModusBadgeElement extends Components.ModusBadge, HTMLStencilElement {
    }
    var HTMLModusBadgeElement: {
        prototype: HTMLModusBadgeElement;
        new (): HTMLModusBadgeElement;
    };
    interface HTMLModusBreadcrumbElement extends Components.ModusBreadcrumb, HTMLStencilElement {
    }
    var HTMLModusBreadcrumbElement: {
        prototype: HTMLModusBreadcrumbElement;
        new (): HTMLModusBreadcrumbElement;
    };
    interface HTMLModusButtonElement extends Components.ModusButton, HTMLStencilElement {
    }
    var HTMLModusButtonElement: {
        prototype: HTMLModusButtonElement;
        new (): HTMLModusButtonElement;
    };
    interface HTMLModusCardElement extends Components.ModusCard, HTMLStencilElement {
    }
    var HTMLModusCardElement: {
        prototype: HTMLModusCardElement;
        new (): HTMLModusCardElement;
    };
    interface HTMLModusCheckboxElement extends Components.ModusCheckbox, HTMLStencilElement {
    }
    var HTMLModusCheckboxElement: {
        prototype: HTMLModusCheckboxElement;
        new (): HTMLModusCheckboxElement;
    };
    interface HTMLModusChipElement extends Components.ModusChip, HTMLStencilElement {
    }
    var HTMLModusChipElement: {
        prototype: HTMLModusChipElement;
        new (): HTMLModusChipElement;
    };
    interface HTMLModusDialogElement extends Components.ModusDialog, HTMLStencilElement {
    }
    var HTMLModusDialogElement: {
        prototype: HTMLModusDialogElement;
        new (): HTMLModusDialogElement;
    };
    interface HTMLModusDropdownElement extends Components.ModusDropdown, HTMLStencilElement {
    }
    var HTMLModusDropdownElement: {
        prototype: HTMLModusDropdownElement;
        new (): HTMLModusDropdownElement;
    };
    interface HTMLModusListElement extends Components.ModusList, HTMLStencilElement {
    }
    var HTMLModusListElement: {
        prototype: HTMLModusListElement;
        new (): HTMLModusListElement;
    };
    interface HTMLModusListItemElement extends Components.ModusListItem, HTMLStencilElement {
    }
    var HTMLModusListItemElement: {
        prototype: HTMLModusListItemElement;
        new (): HTMLModusListItemElement;
    };
    interface HTMLModusNavbarElement extends Components.ModusNavbar, HTMLStencilElement {
    }
    var HTMLModusNavbarElement: {
        prototype: HTMLModusNavbarElement;
        new (): HTMLModusNavbarElement;
    };
    interface HTMLModusNavbarProfileMenuElement extends Components.ModusNavbarProfileMenu, HTMLStencilElement {
    }
    var HTMLModusNavbarProfileMenuElement: {
        prototype: HTMLModusNavbarProfileMenuElement;
        new (): HTMLModusNavbarProfileMenuElement;
    };
    interface HTMLModusNumberInputElement extends Components.ModusNumberInput, HTMLStencilElement {
    }
    var HTMLModusNumberInputElement: {
        prototype: HTMLModusNumberInputElement;
        new (): HTMLModusNumberInputElement;
    };
    interface HTMLModusProgressBarElement extends Components.ModusProgressBar, HTMLStencilElement {
    }
    var HTMLModusProgressBarElement: {
        prototype: HTMLModusProgressBarElement;
        new (): HTMLModusProgressBarElement;
    };
    interface HTMLModusSelectElement extends Components.ModusSelect, HTMLStencilElement {
    }
    var HTMLModusSelectElement: {
        prototype: HTMLModusSelectElement;
        new (): HTMLModusSelectElement;
    };
    interface HTMLModusSpinnerElement extends Components.ModusSpinner, HTMLStencilElement {
    }
    var HTMLModusSpinnerElement: {
        prototype: HTMLModusSpinnerElement;
        new (): HTMLModusSpinnerElement;
    };
    interface HTMLModusTextInputElement extends Components.ModusTextInput, HTMLStencilElement {
    }
    var HTMLModusTextInputElement: {
        prototype: HTMLModusTextInputElement;
        new (): HTMLModusTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "modus-accordion": HTMLModusAccordionElement;
        "modus-accordion-item": HTMLModusAccordionItemElement;
        "modus-alert": HTMLModusAlertElement;
        "modus-badge": HTMLModusBadgeElement;
        "modus-breadcrumb": HTMLModusBreadcrumbElement;
        "modus-button": HTMLModusButtonElement;
        "modus-card": HTMLModusCardElement;
        "modus-checkbox": HTMLModusCheckboxElement;
        "modus-chip": HTMLModusChipElement;
        "modus-dialog": HTMLModusDialogElement;
        "modus-dropdown": HTMLModusDropdownElement;
        "modus-list": HTMLModusListElement;
        "modus-list-item": HTMLModusListItemElement;
        "modus-navbar": HTMLModusNavbarElement;
        "modus-navbar-profile-menu": HTMLModusNavbarProfileMenuElement;
        "modus-number-input": HTMLModusNumberInputElement;
        "modus-progress-bar": HTMLModusProgressBarElement;
        "modus-select": HTMLModusSelectElement;
        "modus-spinner": HTMLModusSpinnerElement;
        "modus-text-input": HTMLModusTextInputElement;
    }
}
declare namespace LocalJSX {
    interface ModusAccordion {
    }
    interface ModusAccordionItem {
        /**
          * (optional) Disables the accordion item, locks expand/collapse.
         */
        "disabled"?: boolean;
        /**
          * (optional) Whether the accordion item is expanded.
         */
        "expanded"?: boolean;
        /**
          * (required) The text to render in the header.
         */
        "headerText"?: string;
        /**
          * An event that fires on every accordion close.
         */
        "onClosed"?: (event: CustomEvent<any>) => void;
        /**
          * An event that fires on every accordion open.
         */
        "onOpened"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The size of accordion item.
         */
        "size"?: 'condensed' | 'standard';
    }
    interface ModusAlert {
        /**
          * (optional) Whether the alert has a dismiss button
         */
        "dismissible"?: boolean;
        /**
          * (optional) The alert message
         */
        "message"?: string;
        /**
          * An event that fires when the alert is dismissed
         */
        "onDismissClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The type of alert, sets the color and icon to render
         */
        "type"?: 'error' | 'info' | 'info-gray' | 'info-gray-dark' | 'success' | 'warning';
    }
    interface ModusBadge {
        /**
          * (optional) The color of the badge
         */
        "color"?: 'danger' | 'dark' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
        /**
          * (optional) The size of the badge
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * (optional) The type of the badge
         */
        "type"?: 'counter' | 'default' | 'text';
    }
    interface ModusBreadcrumb {
        /**
          * The breadcrumbs to render.
         */
        "crumbs"?: Crumb[];
        /**
          * (optional) An event that fires on breadcrumb click.
         */
        "onCrumbClick"?: (event: CustomEvent<Crumb>) => void;
    }
    interface ModusButton {
        /**
          * (optional) The style of the button
         */
        "buttonStyle"?: 'borderless' | 'fill' | 'outline';
        /**
          * (optional) The color of the button.
         */
        "color"?: 'danger' | 'default' | 'primary' | 'secondary' | 'warning';
        /**
          * (optional) Disables the button.
         */
        "disabled"?: boolean;
        /**
          * (optional) An event that fires on button click.
         */
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The size of the button.
         */
        "size"?: 'small' | 'medium' | 'large';
    }
    interface ModusCard {
        /**
          * (optional) The height of the card.
         */
        "height"?: string;
        /**
          * (optional) The width of the card.
         */
        "width"?: string;
    }
    interface ModusCheckbox {
        /**
          * (optional) Whether the checkbox is checked.
         */
        "checked"?: boolean;
        /**
          * (optional) Whether the checkbox is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The checkbox label.
         */
        "label"?: string;
        /**
          * An event that fires on checkbox click.
         */
        "onCheckboxClick"?: (event: CustomEvent<boolean>) => void;
        /**
          * (optional) The size of the button
         */
        "size"?: 'small' | 'medium';
    }
    interface ModusChip {
        /**
          * (optional) The chip's style.
         */
        "chipStyle"?: 'outline' | 'solid';
        /**
          * (optional) Whether the chip is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) Whether the chip has an error.
         */
        "hasError"?: boolean;
        /**
          * (optional) The image's url.
         */
        "imageUrl"?: string;
        /**
          * An event that fires on chip click.
         */
        "onChipClick"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * An event that fires on close icon click.
         */
        "onCloseClick"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * (optional) Whether to show the checkmark.
         */
        "showCheckmark"?: boolean;
        /**
          * (optional) Whether to show the close icon.
         */
        "showClose"?: boolean;
        /**
          * (optional) The chip's size.
         */
        "size"?: 'medium' | 'large';
        /**
          * (optional) The chip's value.
         */
        "value"?: string;
    }
    interface ModusDialog {
        /**
          * (optional) The text to display in the header.
         */
        "headerText"?: string;
        /**
          * (optional) An event that fires on close.
         */
        "onDialogClose"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) An event that fires on primary button click.
         */
        "onPrimaryButtonClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) An event that fires on secondary button click.
         */
        "onSecondaryButtonClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The text to display in the primary button.
         */
        "primaryButtonText"?: string;
        /**
          * (optional) The text to display in the secondary button.
         */
        "secondaryButtonText"?: string;
        /**
          * (optional) Whether to show the secondary button.
         */
        "showSecondaryButton"?: boolean;
        /**
          * (optional) Whether to show the dialog.
         */
        "visible"?: boolean;
    }
    interface ModusDropdown {
        /**
          * (optional) Disables the dropdown
         */
        "disabled"?: boolean;
        /**
          * An event that fires on dropdown close
         */
        "onDropdownClose"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The placement of the dropdown in related to the toggleElement
         */
        "placement"?: 'top' | 'right' | 'bottom' | 'left';
        /**
          * (required) The element id that the list renders near and that triggers the toggling of the list
         */
        "toggleElementId"?: string;
    }
    interface ModusList {
    }
    interface ModusListItem {
        /**
          * (optional) Disables the list item
         */
        "disabled"?: boolean;
        /**
          * An event that fires on list item click
         */
        "onItemClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The selected state of the list item
         */
        "selected"?: boolean;
        /**
          * (optional) The size of list item
         */
        "size"?: 'condensed' | 'standard';
        /**
          * (optional) The type of list item
         */
        "type"?: 'standard';
    }
    interface ModusNavbar {
        /**
          * An event that fires on product logo click.
         */
        "onProductLogoClick"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * An event that fires on profile menu sign out click.
         */
        "onProfileMenuSignOutClick"?: (event: CustomEvent<MouseEvent>) => void;
        /**
          * (required) Product logo options.
         */
        "productLogoOptions"?: { url: string };
        /**
          * (required) Profile menu options.
         */
        "profileMenuOptions"?: { avatarUrl?: string, email?: string, initials?: string, username: string };
        /**
          * (optional) Whether to show the apps menu.
         */
        "showAppsMenu"?: boolean;
        /**
          * (optional) Whether to show the help menu.
         */
        "showHelpMenu"?: boolean;
        /**
          * (optional) Whether to show the main menu.
         */
        "showMainMenu"?: boolean;
        /**
          * (optional) Whether to show notifications.
         */
        "showNotifications"?: boolean;
        /**
          * (optional) Whether to show search.
         */
        "showSearch"?: boolean;
    }
    interface ModusNavbarProfileMenu {
        "avatarUrl"?: string;
        "email"?: string;
        "initials"?: string;
        "onSignOutClick"?: (event: CustomEvent<MouseEvent>) => void;
        "username"?: string;
    }
    interface ModusNumberInput {
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The input's error state text.
         */
        "errorText"?: string;
        /**
          * (optional) The input's helper text displayed below the input.
         */
        "helperText"?: string;
        /**
          * (optional) The input's label.
         */
        "label"?: string;
        /**
          * (optional) The input's maximum value.
         */
        "maxValue"?: number;
        /**
          * (optional) The input's minimum value.
         */
        "minValue"?: number;
        /**
          * An event that fires on input value change.
         */
        "onValueChange"?: (event: CustomEvent<string>) => void;
        /**
          * (optional) The input's placeholder text.
         */
        "placeholder"?: string;
        /**
          * (optional) Whether the input's content is read-only
         */
        "readOnly"?: boolean;
        /**
          * (optional) Whether the input is required.
         */
        "required"?: boolean;
        /**
          * (optional) The input's size.
         */
        "size"?: 'medium' | 'large';
        /**
          * (optional) The input's step.
         */
        "step"?: number;
        /**
          * (optional) The input's valid state text.
         */
        "validText"?: string;
        /**
          * (optional) The input's value.
         */
        "value"?: string;
    }
    interface ModusProgressBar {
        /**
          * (optional) The progress bar's background color.
         */
        "backgroundColor"?: string;
        /**
          * (optional) The progress bar's foreground color.
         */
        "color"?: string;
        /**
          * (optional) The progress bar's maximum value.
         */
        "maxValue"?: number;
        /**
          * (optional) The progress bar's minimum value.
         */
        "minValue"?: number;
        /**
          * (optional) The text displayed on the progress bar.
         */
        "text"?: string;
        /**
          * (optional) The progress bar's text color.
         */
        "textColor"?: string;
        /**
          * (optional) The progress bar's value.
         */
        "value"?: number;
    }
    interface ModusSelect {
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The input's error text.
         */
        "errorText"?: string;
        /**
          * (optional) The input's helper text.
         */
        "helperText"?: string;
        /**
          * (optional) The input label.
         */
        "label"?: string;
        /**
          * An event that fires on input value change.
         */
        "onValueChange"?: (event: CustomEvent<unknown>) => void;
        /**
          * The options for the dropdown list.
         */
        "options"?: unknown[];
        /**
          * The options property to render in the dropdown list.
         */
        "optionsDisplayProp"?: string;
        /**
          * (optional) Whether the input is required.
         */
        "required"?: boolean;
        /**
          * (optional) The input's size.
         */
        "size"?: 'medium' | 'large';
        /**
          * (optional) The input's valid text.
         */
        "validText"?: string;
        /**
          * (optional) The input value.
         */
        "value"?: unknown;
    }
    interface ModusSpinner {
        /**
          * (optional) The color of the spinner in hex format (eg #FFFFFF)
         */
        "color"?: string;
        /**
          * (optional) The size of the spinner, will be applied to both the height and width
         */
        "size"?: string;
    }
    interface ModusTextInput {
        /**
          * (optional) Whether the input has a clear button.
         */
        "clearable"?: boolean;
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The input's error state text.
         */
        "errorText"?: string;
        /**
          * (optional) The input's helper text displayed below the input.
         */
        "helperText"?: string;
        /**
          * (optional) Whether the search icon is included.
         */
        "includeSearchIcon"?: boolean;
        /**
          * (optional) The input's label.
         */
        "label"?: string;
        /**
          * (optional) The input's maximum length.
         */
        "maxLength"?: number;
        /**
          * (optional) The input's minimum length.
         */
        "minLength"?: number;
        /**
          * An event that fires on input value change.
         */
        "onValueChange"?: (event: CustomEvent<string>) => void;
        /**
          * (optional) The input's placeholder text.
         */
        "placeholder"?: string;
        /**
          * (optional) Whether the input's content is read-only
         */
        "readOnly"?: boolean;
        /**
          * (optional) Whether the input is required.
         */
        "required"?: boolean;
        /**
          * (optional) The input's size.
         */
        "size"?: 'medium' | 'large';
        /**
          * (optional) The input's valid state text.
         */
        "validText"?: string;
        /**
          * (optional) The input's value.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "modus-accordion": ModusAccordion;
        "modus-accordion-item": ModusAccordionItem;
        "modus-alert": ModusAlert;
        "modus-badge": ModusBadge;
        "modus-breadcrumb": ModusBreadcrumb;
        "modus-button": ModusButton;
        "modus-card": ModusCard;
        "modus-checkbox": ModusCheckbox;
        "modus-chip": ModusChip;
        "modus-dialog": ModusDialog;
        "modus-dropdown": ModusDropdown;
        "modus-list": ModusList;
        "modus-list-item": ModusListItem;
        "modus-navbar": ModusNavbar;
        "modus-navbar-profile-menu": ModusNavbarProfileMenu;
        "modus-number-input": ModusNumberInput;
        "modus-progress-bar": ModusProgressBar;
        "modus-select": ModusSelect;
        "modus-spinner": ModusSpinner;
        "modus-text-input": ModusTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "modus-accordion": LocalJSX.ModusAccordion & JSXBase.HTMLAttributes<HTMLModusAccordionElement>;
            "modus-accordion-item": LocalJSX.ModusAccordionItem & JSXBase.HTMLAttributes<HTMLModusAccordionItemElement>;
            "modus-alert": LocalJSX.ModusAlert & JSXBase.HTMLAttributes<HTMLModusAlertElement>;
            "modus-badge": LocalJSX.ModusBadge & JSXBase.HTMLAttributes<HTMLModusBadgeElement>;
            "modus-breadcrumb": LocalJSX.ModusBreadcrumb & JSXBase.HTMLAttributes<HTMLModusBreadcrumbElement>;
            "modus-button": LocalJSX.ModusButton & JSXBase.HTMLAttributes<HTMLModusButtonElement>;
            "modus-card": LocalJSX.ModusCard & JSXBase.HTMLAttributes<HTMLModusCardElement>;
            "modus-checkbox": LocalJSX.ModusCheckbox & JSXBase.HTMLAttributes<HTMLModusCheckboxElement>;
            "modus-chip": LocalJSX.ModusChip & JSXBase.HTMLAttributes<HTMLModusChipElement>;
            "modus-dialog": LocalJSX.ModusDialog & JSXBase.HTMLAttributes<HTMLModusDialogElement>;
            "modus-dropdown": LocalJSX.ModusDropdown & JSXBase.HTMLAttributes<HTMLModusDropdownElement>;
            "modus-list": LocalJSX.ModusList & JSXBase.HTMLAttributes<HTMLModusListElement>;
            "modus-list-item": LocalJSX.ModusListItem & JSXBase.HTMLAttributes<HTMLModusListItemElement>;
            "modus-navbar": LocalJSX.ModusNavbar & JSXBase.HTMLAttributes<HTMLModusNavbarElement>;
            "modus-navbar-profile-menu": LocalJSX.ModusNavbarProfileMenu & JSXBase.HTMLAttributes<HTMLModusNavbarProfileMenuElement>;
            "modus-number-input": LocalJSX.ModusNumberInput & JSXBase.HTMLAttributes<HTMLModusNumberInputElement>;
            "modus-progress-bar": LocalJSX.ModusProgressBar & JSXBase.HTMLAttributes<HTMLModusProgressBarElement>;
            "modus-select": LocalJSX.ModusSelect & JSXBase.HTMLAttributes<HTMLModusSelectElement>;
            "modus-spinner": LocalJSX.ModusSpinner & JSXBase.HTMLAttributes<HTMLModusSpinnerElement>;
            "modus-text-input": LocalJSX.ModusTextInput & JSXBase.HTMLAttributes<HTMLModusTextInputElement>;
        }
    }
}
