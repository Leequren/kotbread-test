export type Override<T, K extends Partial<Record<keyof T, unknown>>> = Omit<
  T,
  keyof K
> &
  K
