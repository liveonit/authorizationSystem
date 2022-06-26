import { FieldPolicy, FieldReadFunction, ReactiveVar } from "@apollo/client";
import { makeVar } from "@apollo/client";

export interface Field {
  [fieldName: string]: FieldPolicy<any, any, any> | FieldReadFunction<any, any>;
}

export default class ReactiveStoreVar<T> {
  private readonly persist: boolean;
  private readonly debug?: boolean;

  private readonly initialState: T;

  public readonly loadOnMount: boolean;
  public readonly preferInitialState: boolean;
  public readonly varName: string;
  public readonly reactiveVar: ReactiveVar<T>;

  constructor({
    initialState,
    persist,
    loadOnMount,
    varName,
    preferInitialState,
    debug,
  }: {
    varName: string;
    initialState: T;
    loadOnMount?: boolean;
    persist?: boolean;
    preferInitialState?: boolean;
    debug?: boolean;
  }) {
    if (persist && varName == null)
      throw TypeError("Must specify varName when persist is set to true");

    this.varName = varName || "";
    this.persist = persist || false;
    this.debug = debug;
    this.loadOnMount = loadOnMount || true;
    this.initialState = initialState;
    this.preferInitialState = preferInitialState || false;
    this.reactiveVar = makeVar<T>(initialState);
    if (loadOnMount && !preferInitialState) this.load();
  }

  get() {
    return this.reactiveVar();
  }

  set(newValue: T) {
    const state = this.reactiveVar(newValue);
    if (process.env.NEXT_PUBLIC_DEBUG_STATE === "true" && this.debug) {
      console.log(this.varName, { state });
    }
    if (this.persist) this.save();
    return state;
  }

  reset() {
    this.set(this.initialState);
    return this;
  }

  // Load the reactive variable from local storage
  load() {
    // Nothing is loaded is the data is not set to persist
    if (!this.persist) return;

    // If on serve or if the initial state is prefered over cached state, load the initial state
    if (typeof window === "undefined" || this.preferInitialState) {
      this.set(this.initialState);
      return;
    }

    try {
      // Get data from local storage using the key
      const rawData = localStorage.getItem(this.varName);

      // Nothing found: load initial state
      if (rawData == null) {
        this.set(this.initialState);
        return;
      }

      // Parse the string value
      const parsedValue = JSON.parse(rawData);

      // If nothing was parsed, or if the value is an empty object, load initial state and return
      if (
        parsedValue == null ||
        (typeof parsedValue === "object" &&
          Object.keys(parsedValue).length === 0)
      ) {
        this.set(this.initialState);
        return;
      }

      // Set the value
      this.set(parsedValue);
    } catch (err) {
      this.set(this.initialState);
      return;
    }
    return this;
  }

  // Save to local storage for persitence
  save() {
    if (!this.persist || typeof window === "undefined") return;
    localStorage.setItem(this.varName, JSON.stringify(this.get()));
    return this;
  }

  clearFromStorage() {
    localStorage.removeItem(this.varName);
    return this;
  }
}
