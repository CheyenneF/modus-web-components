/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line
import {
  h, // eslint-disable-line @typescript-eslint/no-unused-vars
  Component,
  EventEmitter,
  Event,
  Prop,
  State,
  Listen,
  Element,
  Watch,
} from '@stencil/core';
import { IconSearch } from '../../icons/svgs/icon-search';

export interface ModusAutocompleteOption {
  id: string;
  value: string;
}

const DATA_ID = 'data-id';
const DATA_SEARCH_VALUE = 'data-search-value';

@Component({
  tag: 'modus-autocomplete',
  styleUrl: 'modus-autocomplete.scss',
  shadow: true,
})
export class ModusAutocomplete {
  @Element() el: HTMLElement;

  /** The autocomplete's aria label. */
  @Prop() ariaLabel: string | null;

  /** Whether the input has a clear button. */
  @Prop() clearable = false;

  /** Whether the input is disabled. */
  @Prop() disabled: boolean;

  /** Whether the autocomplete's options always display on select. */
  @Prop() disableCloseOnSelect: boolean;

  /** The autocomplete's dropdown's max height. */
  @Prop() dropdownMaxHeight = '300px';

  /** The autocomplete's dropdown z-index. */
  @Prop() dropdownZIndex = '1';

  /** The autocomplete's error text. */
  @Prop() errorText: string;

  /** Whether the search icon is included. */
  @Prop() includeSearchIcon = true;

  /** The autocomplete's label. */
  @Prop() label: string;

  /** The autocomplete's no results text. */
  @Prop() noResultsFoundText = 'No results found';

  /** The autocomplete's no results sub-text. */
  @Prop() noResultsFoundSubtext = 'Check spelling or try a different keyword';

  /** The autocomplete's options. */
  @Prop({ mutable: true }) options: ModusAutocompleteOption[] | string[];
  @Watch('options')
  watchOptions() {
    this.convertOptions();
    this.updateVisibleOptions(this.value);
  }

  /** The autocomplete's input placeholder. */
  @Prop() placeholder: string;

  /** Whether to show autocomplete's options when focus. */
  @Prop() showOptionsOnFocus: boolean;

  /** Whether the autocomplete is read-only. */
  @Prop() readOnly: boolean;

  /** Whether the autocomplete is required. */
  @Prop() required: boolean;

  /** Whether to show the no results found message. */
  @Prop() showNoResultsFoundMessage = true;

  /** The autocomplete's size. */
  @Prop() size: 'medium' | 'large' = 'medium';

  /** The autocomplete's search value. */
  @Prop({ mutable: true }) value: string;
  @Watch('value')
  onValueChange() {
    if (this.hasFocus && !this.disableCloseOnSelect) {
      this.disableFiltering = false;
      this.updateVisibleOptions(this.value);
      this.updateVisibleCustomOptions(this.value);
    }
  }

  /** An event that fires when a dropdown option is selected. Emits the option id. */
  @Event() optionSelected: EventEmitter<string>;

  /** An event that fires when the input value changes. Emits the value string. */
  @Event() valueChange: EventEmitter<string>;

  @State() containsSlottedElements = false;
  @State() hasFocus = false;
  @State() visibleOptions: ModusAutocompleteOption[] = [];
  @State() customOptions: Array<any> = [];
  @State() visibleCustomOptions: Array<any> = [];
  @State() disableFiltering = false;

  componentWillLoad(): void {
    this.convertOptions();
  }

  @Listen('mousedown', { target: 'document' })
  onMouseDown(event: MouseEvent): void {
    if (!this.hasFocus) {
      return;
    }

    if (this.el !== event.target || !this.el.contains(event.target as Node)) {
      this.hasFocus = false;
    }
  }

  classBySize: Map<string, string> = new Map([
    ['medium', 'medium'],
    ['large', 'large'],
  ]);

  convertOptions(): void {
    if (this.options && this.options.length > 0) {
      if (typeof this.options[0] === 'string') {
        this.options = this.options?.map((option) => ({
          id: option,
          value: option,
        }));
      }
    }
  }

  displayNoResults = () =>
    this.showNoResultsFoundMessage &&
    this.hasFocus &&
    !this.visibleOptions?.length &&
    !this.visibleCustomOptions?.length &&
    this.value?.length > 0;

  displayOptions = () => {
    const showOptions = this.showOptionsOnFocus || this.value?.length > 0 || this.disableCloseOnSelect;
    return this.hasFocus && showOptions && !this.disabled;
  };

  handleCustomOptionClick = (option: any) => {
    const optionValue = option.getAttribute(DATA_SEARCH_VALUE);
    const optionId = option.getAttribute(DATA_ID);
    this.disableFiltering = this.disableCloseOnSelect;
    this.handleSearchChange(optionValue);
    this.hasFocus = this.disableCloseOnSelect;
    this.optionSelected.emit(optionId);
  };

  handleInputBlur = () => {
    this.hasFocus = !this.disableCloseOnSelect;
  };

  handleOptionKeyPress = (event: any, option: any, isCustomOption = false) => {
    this.disableFiltering = !this.disableCloseOnSelect;
    if (event.key !== 'Enter') {
      return;
    }
    if (isCustomOption) {
      this.handleCustomOptionClick(option);
    } else {
      this.handleOptionClick(option);
    }
  };

  handleOptionClick = (option: ModusAutocompleteOption) => {
    this.disableFiltering = this.disableCloseOnSelect;
    this.handleSearchChange(option.value);
    this.hasFocus = this.disableCloseOnSelect;
    this.optionSelected.emit(option.id);
  };

  handleSearchChange = (search: string) => {
    this.updateVisibleOptions(search);
    this.updateVisibleCustomOptions(search);
    this.value = search;
    this.valueChange.emit(search);
  };

  handleTextInputValueChange = (event: CustomEvent<string>) => {
    // Cancel the modus-text-input's value change event or else it will bubble to consumer.
    event.stopPropagation();
    this.disableFiltering = !this.disableCloseOnSelect;
    this.handleSearchChange(event.detail);
  };

  updateVisibleCustomOptions = (search = '') => {
    if (!this.hasFocus) {
      return;
    }
    const slotted = this.el.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (!slotted || typeof slotted.assignedNodes !== 'function') {
      return;
    }

    this.customOptions = slotted.assignedNodes().filter((node) => node.nodeName !== '#text');

    search = search || '';
    if (search.length === 0 || (this.disableFiltering && this.disableCloseOnSelect)) {
      this.visibleCustomOptions = this.customOptions;
      return;
    }

    this.visibleCustomOptions = this.customOptions?.filter((o: any) => {
      return o.getAttribute(DATA_SEARCH_VALUE).toLowerCase().includes(search.toLowerCase());
    });
    this.containsSlottedElements = this.customOptions.length > 0;
  };

  updateVisibleOptions = (search = '') => {
    if (!this.hasFocus) {
      return;
    }
    search = search || '';
    const isSearchEmpty = search.length === 0;

    if ((isSearchEmpty && !this.showOptionsOnFocus) || (this.disableFiltering && this.disableCloseOnSelect)) {
      this.visibleOptions = this.options as ModusAutocompleteOption[];
      return;
    }

    this.visibleOptions = (this.options as ModusAutocompleteOption[])?.filter((o: ModusAutocompleteOption) => {
      return o.value.toLowerCase().includes(search.toLowerCase());
    });
  };

  // Do not display the slot for the custom options. We use this hidden slot to reference the slot's children.
  CustomOptionsSlot = () => (
    <div style={{ display: 'none' }}>
      <slot onSlotchange={() => this.updateVisibleCustomOptions(this.value)} />
    </div>
  );

  TextInput = () => (
    <modus-text-input
      autocomplete="off"
      clearable={this.clearable}
      errorText={this.hasFocus ? '' : this.errorText}
      includeSearchIcon={this.includeSearchIcon}
      label={this.label}
      onValueChange={(searchEvent: CustomEvent<string>) => {
        this.handleTextInputValueChange(searchEvent);
      }}
      placeholder={this.placeholder}
      required={this.required}
      size={this.size}
      type="search"
      value={this.value}
      onBlur={this.handleInputBlur}
    />
  );

  render(): unknown {
    const classes = `autocomplete ${this.classBySize.get(this.size)}`;
    return (
      <div
        aria-disabled={this.disabled ? 'true' : undefined}
        aria-invalid={!!this.errorText}
        aria-label={this.ariaLabel}
        aria-readonly={this.readOnly}
        aria-required={this.required}
        class={classes}
        onFocusin={() => {
          if (this.hasFocus) {
            return;
          }

          this.hasFocus = true;
          this.updateVisibleOptions(this.value);
          this.updateVisibleCustomOptions(this.value);
        }}
        onFocusout={() => {
          if (this.hasFocus) {
            this.hasFocus = this.disableCloseOnSelect;
          }
        }}>
        {this.TextInput()}
        <div
          class="options-container"
          style={{ maxHeight: this.dropdownMaxHeight, zIndex: this.dropdownZIndex, overflowY: 'auto' }}>
          <ul>
            {this.displayOptions() &&
              this.visibleOptions?.map((option) => {
                return (
                  <li
                    class="text-option"
                    tabindex="0"
                    onClick={() => this.handleOptionClick(option)}
                    onKeyPress={(ev) => this.handleOptionKeyPress(ev, option)}>
                    {option.value}
                  </li>
                );
              })}
            {this.displayOptions() &&
              this.visibleCustomOptions?.map((option) => (
                <li
                  class="custom-option"
                  tabindex="0"
                  onClick={() => this.handleCustomOptionClick(option)}
                  onKeyPress={(ev) => this.handleOptionKeyPress(ev, option, true)}
                  innerHTML={option.outerHTML}
                />
              ))}
          </ul>
          {this.displayNoResults() && <NoResultsFound text={this.noResultsFoundText} subtext={this.noResultsFoundSubtext} />}
        </div>
        {this.CustomOptionsSlot()}
      </div>
    );
  }
}

const NoResultsFound = (props: { text: string; subtext: string }) => (
  <div class="no-results">
    <div style={{ display: 'flex' }}>
      <IconSearch size="28px" />
      <div class="message">{props.text}</div>
    </div>
    <div class="subtext">{props.subtext}</div>
  </div>
);
