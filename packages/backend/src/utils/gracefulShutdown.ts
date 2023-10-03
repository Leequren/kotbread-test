const SHUTDOWN_SIGNALS = ['SIGTERM', 'SIGINT', 'SIGHUP'] as const
type ShutdownSignal = (typeof SHUTDOWN_SIGNALS)[number]
type ShutdownCallback = (signal: ShutdownSignal) => Promise<void>

export class GracefulShutdown {
  private listeners: ShutdownCallback[] = []

  constructor() {
    SHUTDOWN_SIGNALS.map((signal) =>
      process.on(signal, () => {
        this.emit(signal)
      }),
    )
  }

  subscribe = (callback: ShutdownCallback): (() => void) => {
    this.listeners.push(callback)

    return () => {
      this.listeners = this.listeners.filter(
        (listener) => listener !== callback,
      )
    }
  }

  private emit = async (signal: ShutdownSignal) => {
    for (const listener of this.listeners) {
      await listener(signal)
    }
  }
}
