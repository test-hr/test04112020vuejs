export type ErrorObject = {
  response: {
    data:
      | string
      | {
          message: string;
          statusCode: number;
          errors: {
            [key: string]: string[];
          };
        };
    status: number;
  };
};
