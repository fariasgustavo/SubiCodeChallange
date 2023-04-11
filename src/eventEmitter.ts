class EventEmitterError extends Error {
    constructor(message: string) {
        super(`EventEmitterError: ${message}`);
    }
}

export class EventEmitter {
    private events: Record<string, ((payload?: Record<string, any>) => void)[]> = {};
    
    constructor() {}

    public register(eventName: string, eventHandler: (payload?: Record<string, any>) => void): void {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(eventHandler);
    }

    public emit(eventName: string, payload?: Record<string, any>): void {
        if(!this.events[eventName]) {
            throw new EventEmitterError(`event ${eventName} is not registered as an event map`);
        }

        this.events[eventName].forEach(handler => handler(payload));
    }
}