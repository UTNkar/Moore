// eslint-disable-next-line @rushstack/no-new-null
export type Falsy = null | undefined | false;

export type PropsWithChildren<T extends object = {}> = T & {
  children?: React.ReactNode;
};

export type PropsWithRequiredChildren<T extends object = {}> = T & {
  children: React.ReactNode;
};
