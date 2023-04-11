export class EventEmitter {
    private events: Record<string, (payload?: Record<string, any>) => void> = {};
    
    constructor() {}

    public register(eventName: string, eventHandler: (payload?: Record<string, any>) => void): void {
        this.events[eventName] = eventHandler;
    }

    public emit(eventName: string, payload?: Record<string, any>): void {
        this.events[eventName](payload);
    }
}