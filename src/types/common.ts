export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  status: Status;
  error?: string;
}
