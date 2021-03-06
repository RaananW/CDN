import { Observable } from "babylonjs/Misc/observable";
import { Engine } from "babylonjs/Engines/engine";
/**
 * The data structure of a telemetry event.
 */
export interface TelemetryData {
    event: string;
    session: string;
    date: Date;
    now: number;
    viewerId?: string;
    detail: any;
}
/**
 * Receives Telemetry events and raises events to the API
 */
export declare class TelemetryManager {
    onEventBroadcastedObservable: Observable<TelemetryData>;
    private _currentSessionId;
    private _event;
    /**
     * Receives a telemetry event
     * @param event The name of the Telemetry event
     * @param details An additional value, or an object containing a list of property/value pairs
     */
    readonly broadcast: (event: string, viewerId?: string | undefined, details?: any) => void;
    /**
     * Log a Telemetry event for errors raised on the WebGL context.
     * @param engine The Babylon engine with the WebGL context.
     */
    flushWebGLErrors(engine: Engine, viewerId?: string): void;
    /**
     * Enable or disable telemetry events
     * @param enabled Boolan, true if events are enabled
     */
    enable: boolean;
    /**
     * Called on event when disabled, typically do nothing here
     */
    private _eventDisabled;
    /**
     * Called on event when enabled
     * @param event - The name of the Telemetry event
     * @param details An additional value, or an object containing a list of property/value pairs
     */
    private _eventEnabled;
    /**
     * Returns the current session ID or creates one if it doesn't exixt
     * @return The current session ID
     */
    readonly session: string;
    /**
     * Disposes the telemetry manager
     */
    dispose(): void;
}
export declare const telemetryManager: TelemetryManager;
